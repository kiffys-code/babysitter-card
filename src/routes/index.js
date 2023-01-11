import Root from "./Root";
import ConsentChangePage from "./ConsentChangePage";
import ConsentViewPage from "./ConsentViewPage";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { getConsentPreferences } from "config/storage";
// import ViewSharePage from "./ViewSharePage";
import ExportDataPage from "./ExportDataPage";
import AdultOnlyPage from "./AdultOnlyPage";

const loader = async () => {
    const data = getConsentPreferences() || {};
    return {data};
}

// const importLoader = async ({request}) => {
//     const storedData = getConsentPreferences() || {};
//     const urlData = new URL(request.url).searchParams.get('data')
//     return {storedData, urlData};
// }

const router = createHashRouter([
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
            // {
            //     path: '/view',
            //     element: <ViewSharePage />,
            //     loader: importLoader
            // },
            // {
            //     path: '/import',
            //     element: <ImportDataPage />,
            //     loader: importLoader
            // },
            {
                path: '/export',
                element: <ExportDataPage />,
                loader: loader
            }, 
            {
                path: '/adult-only',
                element: <AdultOnlyPage />
            }
        ]
    }
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;