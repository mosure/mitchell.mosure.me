import React from 'react';
import { Grid, makeStyles, createStyles, Typography, IconButton } from '@material-ui/core';

import { globals } from '../data';
import { GitHubIcon, LinkedInIcon } from '../shared';

const useStyles = makeStyles((theme) =>
    createStyles({
        footer: {
            height: '96px',
            backgroundColor: theme.palette.primary.dark,
        },
        consoleFont: {
            fontFamily: '"SF Mono", "Roboto Mono", "Lucida Console", Monaco, monospace, sans-serif',
            fontSize: '0.86rem',
        },
        iconContainer: {
            paddingTop: '8px',
        },
        primaryText: {
            fill: theme.palette.text.hint,
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
            <Grid item>
                <IconButton size='small' href={globals.githubUrl} target='_blank' color='secondary'>
                    <GitHubIcon className={classes.primaryText}/>
                </IconButton>
                <IconButton size='small' href={globals.linkedinUrl} target='_blank' color='secondary'>
                    <LinkedInIcon className={classes.primaryText}/>
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default Footer;
