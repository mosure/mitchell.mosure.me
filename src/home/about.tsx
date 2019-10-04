import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core';

import { withFade, useInlineHr, ImageViewer } from '../shared';
import { globals } from '../data';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            maxWidth: '1000px',
            margin: '0px auto',
        },
        subContainer: {
            paddingTop: '24px',
        },
        textContainer: {
            paddingBottom: '48px',
        },
        imageContainer: {
            paddingLeft: '96px',
        },
    }),
);

const About: React.FC = () => {
    const inlineClass = useInlineHr();
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant='h4' className={inlineClass.inlinehr}>
                About me
            </Typography>

            <Grid
                container
                justify='center'
                className={classes.subContainer}
            >
                <Grid item xs={12} sm={6}>
                    <div className={classes.textContainer}>
                        <p>
                            About me
                        </p>
                        <p>
                            About me schooling
                        </p>
                        <p>
                            Here are recent technologies I have been working with:
                        </p>
                        <p>
                            Item1...
                        </p>
                    </div>
                </Grid>
                {
                    globals.image &&
                    <Grid item xs={12} sm={6}>
                        <div className={classes.imageContainer}>
                            <ImageViewer style={{borderRadius: '4px', width: '200px'}} {...globals.image}/>
                        </div>
                    </Grid>
                }
            </Grid>
        </div>
    );
};

export default withFade(About);
