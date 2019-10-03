import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HeaderMobile from './header-mobile';
import HeaderWeb from './header-web';

const HideOnScroll: React.FC = (props) => {
    const trigger = useScrollTrigger();
    const elevationTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement((
        <Slide appear={false} direction='down' in={!trigger}>
            {props.children}
        </Slide>
    ), {
        elevation: elevationTrigger ? 8 : 0,
    });
};

const Header: React.FC = () => {
    return (
        <HideOnScroll>
            <AppBar>
                <Toolbar>
                    <Hidden mdUp>
                        <HeaderMobile/>
                    </Hidden>
                    <Hidden smDown>
                        <HeaderWeb/>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default Header;
