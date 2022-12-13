import App from "./Root";
import ConsentChangePage from "./ConsentChangePage";
import ConsentViewPage from "./ConsentViewPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { STORAGE_KEY } from "config/storage";

const loader = async () => {
    const data = await JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return {data};
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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

const Routes = () => <RouterProvider router={router} />;

export default Routes;