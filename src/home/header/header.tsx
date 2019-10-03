import React from 'react';
import { Hidden } from '@material-ui/core';

import HeaderMobile from './header-mobile';
import HeaderWeb from './header-web';

const Header: React.FC = () => {
    return (
        <>
            <Hidden mdUp>
                <HeaderMobile/>
            </Hidden>
            <Hidden smDown>
                <HeaderWeb/>
            </Hidden>
        </>
    );
};

export default Header;
