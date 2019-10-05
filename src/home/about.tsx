import React from 'react';
import {
    createStyles,
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { ArrowRightOutlined } from '@material-ui/icons';

import { withFade, useInlineHr, ImageViewer } from '../shared';
import { globals } from '../data';

const useStyles = makeStyles((theme) =>
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
        aboutText: {
            color: theme.palette.text.hint,
            marginBottom: '24px',
        },
        toolkitItem: {
            color: theme.palette.text.hint,
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
                        <Typography className={classes.aboutText} variant='body1'>
                            About me

                            <p>
                                About me schooling
                            </p>
                            <p>
                                Here are recent technologies I have been working with:
                            </p>
                        </Typography>

                        <Grid container justify='center' spacing={1}>
                            {
                                globals.toolkit && globals.toolkit.map((tool, index) => {
                                    return (
                                        <Grid item xs={6} key={index}>
                                            <Grid container>
                                                <Grid item>
                                                    <ArrowRightOutlined color='secondary'/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.toolkitItem} variant='body1'>
                                                        {tool}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    );
                                })
                            }
                        </Grid>
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
