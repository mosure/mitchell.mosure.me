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
                                <Button
                                    target='_blank'
                                    href='mitchell.mosure.pdf'
                                    variant='outlined'
                                    color='secondary'
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
