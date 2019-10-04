import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { animateScroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core';

import HeaderMobile from './header-mobile';
import HeaderWeb from './header-web';

import { LogoStatic } from '../../shared';

const useStyles = makeStyles({
    pointer: {
        cursor: 'pointer',
    },
});

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

const scrollToTop = () => {
    animateScroll.scrollToTop({
        duration: 500,
        smooth: 'easeInOutCubic',
    });
};

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <HideOnScroll>
                <AppBar>
                    <Toolbar>
                        <div className={classes.pointer} onClick={scrollToTop}>
                            <LogoStatic style={{height: '48px', width: '48px'}}/>
                        </div>
                        <Hidden mdUp>
                            <HeaderMobile/>
                        </Hidden>
                        <Hidden smDown>
                            <HeaderWeb/>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar/>
        </>
    );
};

export default Header;
