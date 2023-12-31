import Login from "./pages/Login";
import Painel from "./pages/Painel";
import Detalhes from "./pages/Detalhes";
import Servicos from "./pages/Servicos";
import Relatorios from "./pages/Relatorios";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function Routes() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
        },
        {
            path: '/painel',
            element: <Painel />,
        },
        {
            path: '/detalhes/:id',
            element: <Detalhes />,
        },
        {
            path: '/servicos',
            element: <Servicos />,
        },
        {
            path: '/relatorios',
            element: <Relatorios />,
        },

    ])
    return <RouterProvider router={routes} />;
}
