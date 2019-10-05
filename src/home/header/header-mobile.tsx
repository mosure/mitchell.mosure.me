import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { scroller } from 'react-scroll';

import { HomeItem, homeItems } from '../home.db';

const useStyles = makeStyles((theme) =>
    createStyles({
        fullList: {
            width: 'auto',
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

    const openDrawer = () => {
        setDrawer(true);
    };

    const closeDrawer = () => {
        setDrawer(false);
    };

    return (
        <>
            <Grid container justify='flex-end' align-items='stretch'>
                <Grid item>
                    <IconButton color='secondary' onClick={openDrawer}>
                        <MenuIcon/>
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
                    </List>
                </div>
            </Drawer>
        </>
    );
};

export default HeaderMobile;
