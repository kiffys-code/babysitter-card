import Root from "./Root";
import ConsentChangePage from "./ConsentChangePage";
import ConsentViewPage from "./ConsentViewPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { getConsentPreferences } from "config/storage";

const loader = async () => {
    const data = getConsentPreferences() || {};
    return {data};
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <ConsentViewPage />,
                loader: loader
            },
            {
                path: '/change',
                element: <ConsentChangePage />,
                loader: loader
            }
        ]
    }
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;