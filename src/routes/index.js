import Root from "./Root";
import ConsentChangePage from "./ConsentChangePage";
import ConsentViewPage from "./ConsentViewPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { getConsentPreferences } from "config/storage";
import ImportDataPage from "./ImportDataPage";
import ExportDataPage from "./ExportDataPage";

const loader = async () => {
    const data = getConsentPreferences() || {};
    return {data};
}

const importLoader = async ({request}) => {
    const storedData = getConsentPreferences() || {};
    const urlData = new URL(request.url).searchParams.get('data')
    return {storedData, urlData};
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
            }, 
            {
                path: '/import',
                element: <ImportDataPage />,
                loader: importLoader
            },
            {
                path: '/export',
                element: <ExportDataPage />,
                loader: loader
            }
        ]
    }
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;