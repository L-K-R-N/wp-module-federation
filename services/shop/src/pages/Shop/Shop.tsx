import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {shopRoutes} from '@packages/shared/src/routes/shop'

interface Props {
};

 const Shop: FC<Props> = ({  }) => {
    return (
        <div>
            Shop
            <Link to={shopRoutes.second}>second</Link>
        </div>
    )
};

export default Shop