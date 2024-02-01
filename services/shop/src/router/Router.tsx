import { App } from "@/components/App/App";
import { Shop } from "@/pages/Shop";
import { createBrowserRouter } from "react-router-dom";
import {Link} from 'react-router-dom'
import {shopRoutes} from '@packages/shared/src/routes/shop'
import {UserCard} from '@packages/shared/src/components/UserCard'


const routes = [
    {
        path: "/shop",
        element: <App/>,
        children: [
            {
                path: "main",
                element: <Shop/>,
            },
            {
                path: "second",
                element: 
                    <div>
                        Second shop page
                        <Link to={shopRoutes.main}>main</Link>
                        <UserCard />
                    </div>,
            },
        ]
    }
]
export const router = createBrowserRouter(routes);

export default routes