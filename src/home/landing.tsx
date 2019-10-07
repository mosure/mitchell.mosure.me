import React from 'react';
import {
    createStyles,
    Grid,
    makeStyles,
    Button,
    Typography,
} from '@material-ui/core';

import { globals } from '../data';
import { LogoAnimated } from '../shared';

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            maxWidth: '1000px',
            minHeight: '100vh',
            margin: '0px auto',
        },
        greeting: {
            color: theme.palette.secondary.main,
            marginBottom: 10,
        },
        name: {
            color: theme.palette.text.primary,
            marginBottom: 15,
        },
        firstName: {

        },
        lastName: {

        },
        statement: {
            color: theme.palette.text.hint,
            marginBottom: 36,
        },
        description: {
            marginBottom: 40,
            maxWidth: '450px',
        },
    }),
);

const Landing: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            justify='flex-start'
            alignItems='center'
            className={classes.container}
        >
            <Grid item>
                <Typography variant='h5' className={classes.greeting}>
                    {globals.greeting}
                </Typography>

                <Typography variant='h1' className={classes.name}>
                    <span className={classes.firstName}>
                        {globals.firstName}
                    </span>
                    &nbsp;
                    <span className={classes.lastName}>
                        {globals.lastName}
                    </span>
                </Typography>

                <Typography variant='h2' className={classes.statement}>
                    {globals.statement}
                </Typography>

                <div>
                    <Typography variant='body1' className={classes.description}>
                        {globals.description}
                    </Typography>
                </div>

                <br/>

                <Button target='_blank' href='mitchell.mosure.pdf' size='large' variant='outlined' color='secondary'>
                    View Resume
                </Button>
            </Grid>
            <Grid item>
                <LogoAnimated/>
            </Grid>
        </Grid>
    );
};

export default Landing;
