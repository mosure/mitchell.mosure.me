import React from 'react';
import { Grid, makeStyles, createStyles, Typography, IconButton } from '@material-ui/core';
import ReactGA from 'react-ga';

import { globals } from '../data';
import { GitHubIcon, LinkedInIcon } from '../shared';

const useStyles = makeStyles((theme) =>
    createStyles({
        footer: {
            height: '128px',
            backgroundColor: theme.palette.primary.dark,
        },
        consoleFont: {
            fontFamily: '"SF Mono", "Roboto Mono", "Lucida Console", Monaco, monospace, sans-serif',
            fontSize: '0.86rem',
        },
        iconContainer: {
            paddingBottom: '8px',
        },
        primaryText: {
            fill: theme.palette.text.hint,
            '&:hover': {
                fill: theme.palette.secondary.main,
            },
        },
        iconButtonNoHover: {
            '&:hover': {
                backgroundColor: 'transparent',
                color: theme.palette.secondary.main,
            },
        },
    }),
);

const Footer: React.FC = () => {
    const classes = useStyles();

    const logGitHubClick = () => {
        ReactGA.event({
            category: 'Button',
            action: 'GitHub Open',
            label: 'Footer',
        });
    };

    const logLinkedinClick = () => {
        ReactGA.event({
            category: 'Button',
            action: 'LinkedIn Open',
            label: 'Footer',
        });
    };

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
                <Grid
                    container
                    spacing={1}
                    justify='center'
                    alignItems='center'
                    className={classes.iconContainer}
                >
                    <Grid item>
                        <IconButton
                            size='small'
                            disableFocusRipple
                            disableRipple
                            className={classes.iconButtonNoHover}
                            href={globals.githubUrl}
                            target='_blank'
                            color='secondary'
                            onClick={logGitHubClick}
                        >
                            <GitHubIcon className={classes.primaryText}/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            size='small'
                            disableFocusRipple
                            disableRipple
                            className={classes.iconButtonNoHover}
                            href={globals.linkedinUrl}
                            target='_blank'
                            color='secondary'
                            onClick={logLinkedinClick}
                        >
                            <LinkedInIcon className={classes.primaryText}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Typography className={classes.consoleFont} variant='body2'>
                    {globals.firstName} {globals.lastName}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;
