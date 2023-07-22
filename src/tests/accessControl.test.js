import { render, screen } from '../test-utils'
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ADULT_KEY } from 'config/storage';
import userEvent from '@testing-library/user-event';
import { routeConfig } from 'routes';

describe('18+ Access', () => {

    test('when the app is first opened, the 18+ notice is presented', async () => {

        // When rendered
        const router = createMemoryRouter(routeConfig);
        render(<RouterProvider router={router} />)

        // Then the 18+ Modal is rendered
        const adultPage = await screen.findByRole('heading', {name: /18\+ only/i});
        expect(adultPage).toBeInTheDocument();

    })

    test('if 18+ has already been accepted then the notice is not shown', async () => {

        // Given 18+ has been accepted
        localStorage.setItem(ADULT_KEY, true);

        // When rendered
        const router = createMemoryRouter(routeConfig);
        render(<RouterProvider router={router} />)

        // Then the main page is shown
        const mainPage = await screen.findByRole('heading', {name: /ready to start/i})
        expect(mainPage).toBeInTheDocument();

    })

    test('if 18+ is accepted, then the user can use the app', async () => {
        
        // When rendered
        const user = userEvent.setup();
        const router = createMemoryRouter(routeConfig);
        render(<RouterProvider router={router} />)

        // Then the 18+ Modal is rendered
        const adultPolicyPage = await screen.findByRole('heading', {name: /18\+ only/i})
        expect(adultPolicyPage).toBeInTheDocument();

        // When the user accepts the conditions
        const acceptButton = screen.getByRole('button', {name: /i agree/i});
        await user.click(acceptButton);

        // And they can begin to use the app
        const beginLink = await screen.findByRole('heading', {name: /Ready to start/i});
        expect(beginLink).toBeInTheDocument();

    })

    test('declining 18+ redirects the user to the 18+ only page', async () => {
        
        // When rendered
        const user = userEvent.setup();
        const router = createMemoryRouter(routeConfig);
        render(<RouterProvider router={router} />)

        // Then the 18+ Modal is rendered
        const adultPolicyPage = await screen.findByRole('heading', {name: /18\+ only/i})
        expect(adultPolicyPage).toBeInTheDocument();

        // When the user declines the conditions
        const declineButton = screen.getByRole('button', {name: /get me out of here/i});
        await user.click(declineButton);

        // Then they are redirected to the 18+ only page
        const adultOnlyNoticePage = await screen.findByRole('heading', {name: /You need to be over 18 years old/i});
        expect(adultOnlyNoticePage).toBeInTheDocument();

    })

    test('the user can navigate to the data policy from the 18+ notice', async () => {

        // When rendered
        const user = userEvent.setup();
        const router = createMemoryRouter(routeConfig);
        render(<RouterProvider router={router} />)

        // Then the 18+ Modal is rendered
        const adultPolicyPage = await screen.findByRole('heading', {name: /18\+ only/i})
        expect(adultPolicyPage).toBeInTheDocument();

        // And the user can click the link to the data policyf
        const dataPolicyLink = screen.getByRole('link', {name: /the data policy/i})
        await user.click(dataPolicyLink);

        const dataPolicyPage = await screen.findByRole('heading', {name: /data policy/i});
        expect(dataPolicyPage).toBeInTheDocument();

    })

    test('if 18+ is accidentally declined, then the user can accept at a later time', async () => {

        // When rendered
        const user = userEvent.setup();
        const router = createMemoryRouter(routeConfig);
        render(<RouterProvider router={router} />)

        // Given the user accidentally declined the policy
        const declineButton = await screen.findByRole('button', {name: /get me out of here/i});
        await user.click(declineButton);
        const adultOnlyNoticePage = await screen.findByRole('heading', {name: /You need to be over 18 years old/i});
        expect(adultOnlyNoticePage).toBeInTheDocument();

        // The user can click the 18+ link and accept the policy
        const adultPolicyLink = await screen.findByRole('link', {name: /18\+ Policy/i});
        await user.click(adultPolicyLink);

        const acceptButton = screen.getByRole('button', {name: /i agree/i});
        await user.click(acceptButton);

        // And they can begin to use the app
        const beginLink = screen.getByRole('heading', {name: /Ready to start/i});
        expect(beginLink).toBeInTheDocument();

    })

})

describe('GDPR', () => {

    test('the user can clear their device data, even when they have declined 18+', async () => {
        
        // Given the adult policy has been declined and some data exists on their localstorage (for the app's domain)
        localStorage.setItem(ADULT_KEY, false);
        localStorage.setItem('someArbitraryItem', "whoopsidaisy!");
        expect(localStorage.length).toBe(2);

        // When rendered at the blocking page
        const user = userEvent.setup();
        const router = createMemoryRouter(routeConfig, {initialEntries: ['/adult-policy/declined']});
        render(<RouterProvider router={router} />)

        // The user can navigate to the data policy page
        const dataPolicyLink = await screen.findByRole('link', {name: /data policy/i});
        await user.click(dataPolicyLink);

        const dataPolicyPage = await screen.findByRole('heading', {name: /data policy/i});
        expect(dataPolicyPage).toBeInTheDocument();

        // And they can delete their local data
        const deleteDataButton = screen.getByRole('button', {name: /delete my data/i});
        await user.click(deleteDataButton);

        // And they are redirected and their data is deleted
        const deleteSuccessPage = await screen.findByRole('heading', {name: /Your data has been successfully removed from this device/i});
        expect(deleteSuccessPage).toBeInTheDocument();
        expect(localStorage.length).toBe(0);

    })
})
