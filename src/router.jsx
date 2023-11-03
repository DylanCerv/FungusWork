import { createBrowserRouter } from "react-router-dom";

/**
 * LAYOUTS
 */


/**
 * PAGES
*/
import LayoutPrincipal from "./layouts/LayoutPrincipal";
import NuestroEquipo from "./pages/Nuestro-Equipo";
import Home from "./pages/Home";
import PageNotFound from "./pages/Errors/PageNotFound";

/**
 * COMPONENTS
 */

/**
 * OTHERS
 */


const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <PageNotFound />,
        element: <LayoutPrincipal />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'nuestro-equipo',
                index: true,
                element: <NuestroEquipo />,
            }
        ]
    },
]);

export default router;