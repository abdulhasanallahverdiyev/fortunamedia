import MainRoot from "../Layout/MainRoot";
import MainRoot2 from "../Layout/MainRoot2";
import About from "../Pages/About";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Portfolio from "../Pages/Portfolio";
import Services from "../Pages/Services";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "services",
                element: <Services/>
            },
            {
                path: "portfolio",
                element: <Portfolio />
            },
            {
                path: "services/:id",
                element: <Detail />
            }
        ]
    },
    {
        path: "/",
        element: <MainRoot2 />,
        children: [
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]