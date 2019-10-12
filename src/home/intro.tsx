import React, { useState, useEffect } from 'react';
import posed from 'react-pose';
import { makeStyles, createStyles, Grid } from '@material-ui/core';

import { LogoAnimated } from '../shared';

const useStyles = makeStyles(() =>
    createStyles({
        ssrInit: {
            display: 'block',
        },
        container: {
            height: '100vh',
            width: '100vw',
        },
        logo: {
            maxWidth: '300px',
        },
    }),
);

const Zoom = posed.div({
    complete: {
        scale: 0,
        transition: {
            ease: 'easeOut',
            duration: 300,
        },
        applyAtEnd: { display: 'none' },
    },
});

const Intro: React.FC = () => {
    const classes = useStyles();

    const [state, setState] = useState({
        complete: false,
        hardComplete: false,
        loadAccepted: false,
        failover: false,
    });

    const startTimer = () => {
        setState({
            complete: state.complete,
            hardComplete: state.hardComplete,
            loadAccepted: true,
            failover: state.failover,
        });

        setTimeout(() => {
            setState({
                complete: true,
                hardComplete: state.hardComplete,
                loadAccepted: state.loadAccepted,
                failover: state.failover,
            });
        }, 3500);
    };

    useEffect(() => {
        if (!state.failover) {
            setState({
                complete: state.complete,
                hardComplete: state.hardComplete,
                loadAccepted: state.loadAccepted,
                failover: true,
            });

            // "Browser support" (Edge/Firefox)
            // TODO: This needs rework
            setTimeout(() => {
                if (!state.loadAccepted) {
                    setState({
                        complete: state.complete,
                        hardComplete: true,
                        loadAccepted: state.loadAccepted,
                        failover: state.failover,
                    });
                }
            }, 4000);
        }
    }, [state]);

    return (
        <>
            {
                !state.hardComplete &&
                <Zoom className={classes.ssrInit} pose={state.complete ? 'complete' : 'init'}>
                    <Grid className={classes.container} container justify='center' alignItems='center'>
                        <Grid item>
                            <LogoAnimated className={classes.logo} onLoad={startTimer}/>
                        </Grid>
                    </Grid>
                </Zoom>
            }
        </>
    );
};

export default Intro;
