import { FC, Suspense } from 'react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';



export const App: FC = () => {

    
    
    return (
        <>
            <h1>ADMIN MODULE</h1>
            <Suspense>
                <Outlet/>
            </Suspense>
        </>

    )
 }
