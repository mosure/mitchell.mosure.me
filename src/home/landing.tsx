import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { globals } from '../data';

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            maxWidth: '1000px',
            height: '100%',
        },
        greeting: {
            fontSize: '24px',
            color: theme.palette.secondary.main,
            margin: 0,
        },
        name: {
            fontSize: '72px',
            color: theme.palette.text.primary,
            margin: 0,
        },
        firstName: {

        },
        lastName: {

        },
        statement: {
            fontSize: '72px',
            color: theme.palette.text.hint,
            margin: 0,
        },
        description: {
            color: theme.palette.text.hint,
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
            style={{height: '100%'}}
        >
            <Grid item>
                <h1 className={classes.greeting}>
                    {globals.greeting}
                </h1>

                <h2 className={classes.name}>
                    <span className={classes.firstName}>
                        {globals.firstName}
                    </span>
                    &nbsp;
                    <span className={classes.lastName}>
                        {globals.lastName}
                    </span>
                </h2>

                <h3 className={classes.statement}>
                    {globals.statement}
                </h3>

                <div>
                    <p className={classes.description}>
                        {globals.description}
                    </p>
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
