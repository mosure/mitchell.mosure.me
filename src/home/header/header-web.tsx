import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import ReactGA from 'react-ga';

import { HomeItem, homeItems } from '../home.db';
import { DropFade } from '../../shared';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        anchorItem: {
            paddingLeft: '24px',
            paddingRight: '24px',
            cursor: 'pointer',
        },
        resumeItem: {
            marginLeft: '24px',
            marginRight: '24px',
        },
        anchorLink: {
            paddingTop: 8,
            paddingBottom: 8,
            '&:hover': {
                color: theme.palette.secondary.main,
            },
            userSelect: 'none',
        },
        anchorLinkActive: {
            color: theme.palette.secondary.main,
        },
    }),
);

const HeaderAnchorButton: React.FC<HomeItem> = (props: HomeItem) => {
    const classes = useStyles();

    const logAnchorNav = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Anchor: ' + props.name,
            label: 'Web',
        });
    };

    return (
        <>
            {
                props.name &&
                <DropFade>
                    <Grid className={classes.anchorItem} item>
                        <Link
                            className={classes.anchorLink}
                            activeClass={classes.anchorLinkActive}
                            to={props.name}
                            onClick={logAnchorNav}
                            spy
                            smooth='easeInOutCubic'
                            duration={500}
                        >
                            {props.name.toUpperCase()}
                        </Link>
                    </Grid>
                </DropFade>
            }
        </>
    );
};

const HeaderWeb: React.FC = () => {
    const classes = useStyles();

    const logResumeClick = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Opened Resume',
            label: 'Web',
        });
    };

    return (
        <Grid container justify='flex-end' alignItems='center'>
            {
                homeItems.map((homeItem, index) => {
                    return (
                        <HeaderAnchorButton key={index.toString()} {...homeItem}/>
                    );
                })
            }

            <DropFade>
                <Button
                    className={classes.resumeItem}
                    target='_blank'
                    href='mitchell.mosure.pdf'
                    variant='outlined'
                    color='secondary'
                    onClick={logResumeClick}
                >
                    RESUME
                </Button>
            </DropFade>
        </Grid>
    );
};

export default HeaderWeb;
