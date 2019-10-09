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
} from '@material-ui/core';

import { HomeItem, homeItems } from '../home.db';
import { DrawerOpenClose, GitHubIcon, LinkedInIcon } from '../../shared';
import { globals } from '../../data';

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
    };

    const closeDrawer = () => {
        setDrawer(false);
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
                                <IconButton href={globals.githubUrl} target='_blank' color='secondary'>
                                    <GitHubIcon className={classes.primaryText}/>
                                </IconButton>
                                <IconButton href={globals.linkedinUrl} target='_blank' color='secondary'>
                                    <LinkedInIcon className={classes.primaryText}/>
                                </IconButton>
                            </Grid>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </>
    );
};

export default HeaderMobile;
