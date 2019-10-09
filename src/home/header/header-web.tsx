import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

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
        },
        anchorLinkActive: {
            color: theme.palette.secondary.main,
        },
    }),
);

const HeaderAnchorButton: React.FC<HomeItem> = (props: HomeItem) => {
    const classes = useStyles();

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
                            spy
                            smooth='easeInOutCubic'
                            duration={500}
                        >
                            {props.name}
                        </Link>
                    </Grid>
                </DropFade>
            }
        </>
    );
};

const HeaderWeb: React.FC = () => {
    const classes = useStyles();

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
                >
                    Resume
                </Button>
            </DropFade>
        </Grid>
    );
};

export default HeaderWeb;
