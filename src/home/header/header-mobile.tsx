import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import {
    Drawer,
    Divider,
    Toolbar,
    IconButton,
    ListItemText,
    makeStyles,
    createStyles,
    ListItem,
    List,
    Grid,
    Button,
} from '@material-ui/core';
import ReactGA from 'react-ga';

import { HomeItem, homeItems } from '../home.db';
import { DrawerOpenClose } from '../../shared';

const useStyles = makeStyles((theme) =>
    createStyles({
        fullList: {
            width: 'auto',
        },
        primaryText: {
            fill: theme.palette.text.hint,
        },
    }),
);

const HeaderButton: React.FC<HomeItem & { doClose: () => void }> = (props: HomeItem & { doClose: () => void }) => {
    const scrollTo = () => {
        scroller.scrollTo(props.name as string, {
            duration: 500,
            smooth: 'easeInOutCubic',
        });

        props.doClose();

        logAnchorNav();
    };

    const logAnchorNav = () => {
        ReactGA.event({
            category: 'Actions',
            action: 'Mobile - Anchor: ' + props.name,
        });
    };

    return (
        <>
            {
                props.name &&
                <ListItem button onClick={scrollTo}>
                    <ListItemText>
                        {props.name}
                    </ListItemText>
                </ListItem>
            }
        </>
    );
};

const HeaderMobile: React.FC = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawer] = useState(false);

    const toggleDrawer = () => {
        setDrawer(!drawerOpen);
        logDrawerToggle();
    };

    const closeDrawer = () => {
        setDrawer(false);
    };

    const logResumeClick = () => {
        ReactGA.event({
            category: 'Actions',
            action: 'Web - Opened Resume',
        });
    };

    const logDrawerToggle = () => {
        ReactGA.event({
            category: 'Actions',
            action: 'Mobile - Header drawer toggle',
        });
    };

    return (
        <>
            <Grid container justify='flex-end' align-items='stretch'>
                <Grid item>
                    <IconButton color='secondary' onClick={toggleDrawer}>
                        <DrawerOpenClose open={drawerOpen}/>
                    </IconButton>
                </Grid>
            </Grid>

            <Drawer anchor='top' open={drawerOpen} onClose={closeDrawer}>
                <div
                    role='presentation'
                    className={classes.fullList}
                    onClick={closeDrawer}
                    onKeyDown={closeDrawer}
                >
                    <Toolbar/>
                    <List>
                        {
                            homeItems.map((homeItem, index) => {
                                return (
                                    <HeaderButton key={index} doClose={closeDrawer} {...homeItem}/>
                                );
                            })
                        }
                        <Divider/>
                        <ListItem>
                            <Grid container justify='center' alignItems='center'>
                                <Button
                                    target='_blank'
                                    href='mitchell.mosure.pdf'
                                    variant='outlined'
                                    color='secondary'
                                    onClick={logResumeClick}
                                >
                                    Resume
                                </Button>
                            </Grid>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </>
    );
};

export default HeaderMobile;
