import React from 'react';
import {
    createStyles,
    Grid,
    makeStyles,
    Typography,
    Button,
} from '@material-ui/core';
import ReactGA from 'react-ga';

import { globals } from '../data';
import { DropFade } from '../shared';

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            maxWidth: '1000px',
            minHeight: '100vh',
            margin: '0px auto',
        },
        greeting: {
            color: theme.palette.secondary.main,
            marginBottom: 0,
            userSelect: 'none',
        },
        name: {
            color: theme.palette.text.primary,
            marginBottom: 0,
            userSelect: 'none',
        },
        firstName: {

        },
        lastName: {

        },
        statement: {
            color: theme.palette.text.hint,
            marginBottom: 36,
            userSelect: 'none',
        },
        description: {
            marginBottom: 40,
            maxWidth: '450px',
        },
        iconButtonNoHover: {
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
    }),
);

const Landing: React.FC = () => {
    const classes = useStyles();

    const logEmailClicked = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Email Me',
            label: 'Landing',
        });
    };

    return (
        <Grid
            container
            justify='flex-start'
            alignItems='center'
            className={classes.container}
        >
            <Grid item>
                <DropFade>
                    <Typography variant='h5' className={classes.greeting}>
                        {globals.greeting}
                    </Typography>
                </DropFade>

                <DropFade>
                    <Typography variant='h1' className={classes.name}>
                        <span className={classes.firstName}>
                            {globals.firstName}
                        </span>
                        {' '}
                        <span className={classes.lastName}>
                            {globals.lastName}
                        </span>
                    </Typography>
                </DropFade>

                <DropFade>
                    <Typography variant='h2' className={classes.statement}>
                        {globals.statement}
                    </Typography>
                </DropFade>

                <DropFade>
                    <div>
                        <Typography variant='body1' className={classes.description}>
                            {globals.description}
                        </Typography>
                    </div>
                </DropFade>

                <DropFade>
                    <Button
                        target='_blank'
                        href='mailto:mitchell@mosure.me?subject=Website Inquiry'
                        variant='outlined'
                        color='secondary'
                        onClick={logEmailClicked}
                    >
                        Email Me
                    </Button>
                </DropFade>
            </Grid>
        </Grid>
    );
};

export default Landing;
