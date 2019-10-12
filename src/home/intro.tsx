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
    });

    const startTimer = () => {
        setState({
            complete: false,
            hardComplete: false,
            loadAccepted: true,
        });

        setTimeout(() => {
            setState({
                complete: true,
                hardComplete: false,
                loadAccepted: true,
            });
        }, 3500);
    };

    useEffect(() => {
        // "Browser support" (Edge/Firefox)
        // TODO: This needs rework
        setTimeout(() => {
            if (!state.loadAccepted) {
                setState({
                    complete: true,
                    hardComplete: true,
                    loadAccepted: true,
                });
            }
        }, 4000);
    }, []);

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
