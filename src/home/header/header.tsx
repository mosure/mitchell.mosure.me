import React, { useState } from 'react';
import { animateScroll } from 'react-scroll';
import {
    makeStyles,
    createStyles,
    Toolbar,
    AppBar,
    Slide,
    Hidden,
    useScrollTrigger,
} from '@material-ui/core';

import HeaderMobile from './header-mobile';
import HeaderWeb from './header-web';

import { LogoStatic, DropFade } from '../../shared';

const useStyles = makeStyles((theme) =>
    createStyles({
        pointer: {
            cursor: 'pointer',
        },
        appBar: {
            zIndex: theme.zIndex.modal + 1,
        },
    }),
);

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

    const [loaded, setLoaded] = useState(false);

    setTimeout(() => {
        setLoaded(true);
    }, 500);

    return (
        <DropFade pose={loaded ? 'load' : 'init'} delay={500} staggerChildren={100} beforeChildren>
            <HideOnScroll>
                <AppBar className={classes.appBar}>
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
        </DropFade>
    );
};

export default Header;
