import { MemoryRouter } from "react-router-dom";
import { render } from "test-utils";
import Root from "../routes/Root";

test('app renders without errors', () => {
    render(
        <MemoryRouter>
            <Root />
        </MemoryRouter>
    );
})