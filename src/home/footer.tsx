import React from 'react';
import { Grid, makeStyles, createStyles, Typography } from '@material-ui/core';

import { globals } from '../data';

const useStyles = makeStyles((theme) =>
    createStyles({
        footer: {
            height: '72px',
            backgroundColor: theme.palette.primary.dark,
        },
        consoleFont: {
            fontFamily: '"SF Mono", "Roboto Mono", "Lucida Console", Monaco, monospace, sans-serif',
            fontSize: '0.75rem',
        },
    }),
);

const Footer: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            justify='center'
            alignItems='center'
            alignContent='center'
            direction='column'
            className={classes.footer}
        >
            <Grid item>
                <Typography className={classes.consoleFont} variant='body2'>
                    Built by {globals.firstName} {globals.lastName}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;
