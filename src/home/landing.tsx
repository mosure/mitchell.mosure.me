import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { globals } from '../data';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            maxWidth: '1000px',
            minHeight: '100vh',
            margin: '0px auto',
        },
        greeting: {
            color: theme.palette.secondary.main,
            margin: 0,
        },
        name: {
            color: theme.palette.text.primary,
            marginBottom: 4,
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
            color: theme.palette.text.hint,
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
            justify='center'
            alignItems='flex-start'
            direction='column'
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

                <Button variant='outlined' color='secondary'>
                    Resume
                </Button>
            </Grid>
        </Grid>
    );
};

export default Landing;
