import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

import { HomeItem, homeItems } from '../home.db';

const useStyles = makeStyles((theme) => {
    return {
        fullList: {
            width: 'auto',
        },
        anchorLink: {
            paddingTop: 8,
            paddingBottom: 8,
            '&:hover': {
                color: theme.palette.secondary.main,
            },
        },
        anchorLinkActive: {
            color: theme.palette.secondary.main,
        },
    };
});

const HeaderAnchorButton: React.FC<HomeItem> = (props: HomeItem) => {
    const classes = useStyles();

    return (
        <>
            {
                props.tag && props.name &&
                <ListItem button>
                    <ListItemText>
                        <Link
                            className={classes.anchorLink}
                            activeClass={classes.anchorLinkActive}
                            to={props.tag}
                            spy
                            smooth='easeInOutCubic'
                            duration={500}
                        >
                            {props.name}
                        </Link>
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
                    <IconButton onClick={openDrawer}>
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
                    <List>
                        {
                            homeItems.map((homeItem, index) => {
                                return (
                                    <HeaderAnchorButton key={index} {...homeItem}/>
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
