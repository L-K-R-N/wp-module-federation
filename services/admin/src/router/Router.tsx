import { App } from "@/components/App/App";
import { About } from "@/pages/About";
import { createBrowserRouter } from "react-router-dom";
import {adminRoutes} from '@packages/shared/src/routes/admin'
const routes = [
    {
        path: "/admin",
        element: 
                <App/>,
        children: [
            {
                path: adminRoutes.about,
                element: <About/>,
            },
          
        ]
    }
]

export const router = createBrowserRouter(routes)

export default routes