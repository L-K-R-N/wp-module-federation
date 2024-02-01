import { FC, Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {adminRoutes} from '@packages/shared/src/routes/admin'
import {shopRoutes} from '@packages/shared/src/routes/shop'


export const App: FC = () => {

    
    
    return (
        <>
        <Link to={adminRoutes.about}>About</Link>
        <Link to={shopRoutes.main}>Host</Link>
            <h1>PAGE</h1>
            <Suspense>
                <Outlet/>
            </Suspense>
        </>

    )
 }
