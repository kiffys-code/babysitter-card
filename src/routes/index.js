import Root from "./Root";
import ConsentChangePage from "./ConsentChangePage";
import ConsentViewPage from "./ConsentViewPage";
import { Outlet } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { getConsentPreferences } from "config/storage";
import ExportDataPage from "./ExportDataPage";
import AdultOnlyPage from "./AdultOnlyPage";
import AboutPage from "./AboutPage";
import AttributionsPage from "./AttributionsPage";
import AdultPolicyPage from "./AdultPolicyPage";
import DataPolicyPage from "./DataPolicyPage";
import RevokeSuccessPage from "./RevokeSuccessPage";

const dataLoader = () => {
    const data = getConsentPreferences() || {};
    return {data};
}

export const routeConfig = [
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Outlet />,
                children: [
                    {
                        loader: dataLoader,
                        path: '',
                        element: <ConsentViewPage />
                    },
                    {
                        loader: dataLoader,
                        path: 'change',
                        element: <ConsentChangePage />,
                    },
                    {
                        loader: dataLoader,
                        path: 'export',
                        element: <ExportDataPage />,
                    }
                ]
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'attributions',
                element: <AttributionsPage />
            },
            {
                path: 'adult-policy',
                element: <Outlet />,
                children: [
                    {
                        path: '',
                        element: <AdultPolicyPage />
                    },
                    {
                        path: 'declined',
                        element: <AdultOnlyPage />
                    }
                ]
            },
            {
                path: 'data-policy',
                element: <Outlet />,
                children: [
                    {
                        path: '',
                        element: <DataPolicyPage />
                    },
                    {
                        path: 'revoked',
                        element: <RevokeSuccessPage />
                    }
                ]
            }
        ]
    }
];

// keeping here for reference; this works in the wild but there is an issue 
// with how these are being stubbed in tests in the react-router library
// so we cannot use redirect inside e.g. a loader and have it redirect as expected in tests :(
    // const protectedLoader = () => {
    //     const isAdult = getIsAdult();
    //     console.log({isAdult})
    //     if(!isAdult) {
    //         console.log("REDIRECTING")
    //         return redirect('/adult-policy');
    //     } else {
    //         console.log("Welcome!")
    //         return null;
    //     }
    // }
// export const routeConfig = [
//     {
//         path: '/',
//         element: <Root />,
//         errorElement: <ErrorPage />,
//         children: [
//             {
//                 loader: dataLoader,
//                 path: '',
//                 element: <ConsentViewPage />
//             },
//             {
//                 loader: dataLoader,
//                 path: 'change',
//                 element: <ConsentChangePage />,
//             },
//             {
//                 loader: dataLoader,
//                 path: 'export',
//                 element: <ExportDataPage />,
//             },
//             {
//                 path: 'about',
//                 element: <AboutPage />
//             },
//             {
//                 path: 'attributions',
//                 element: <AttributionsPage />
//             },
//             {
//                 path: '/adult-policy',
//                 element: <Outlet />,
//                 children: [
//                     {
//                         path: '',
//                         element: <AdultPolicyPage />
//                     },
//                     {
//                         path: 'declined',
//                         element: <AdultOnlyPage />
//                     }
//                 ]
//             },
//             {
//                 path: '/data-policy',
//                 element: <Outlet />,
//                 children: [
//                     {
//                         path: '',
//                         element: <DataPolicyPage />
//                     },
//                     {
//                         path: 'revoked',
//                         element: <RevokeSuccessPage />
//                     }
//                 ]
//             }
//         ]
//     }
// ];