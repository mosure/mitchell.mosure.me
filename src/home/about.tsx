import React from 'react';
import {
    createStyles,
    Grid,
    makeStyles,
    Typography,
    Link,
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
            marginLeft: '96px',
            maxWidth: '300px',
            maxHeight: '300px',
            [theme.breakpoints.down('sm')]: {
                margin: '0px auto',
            },
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
                            Hello!
                        </Typography>

                        <Typography className={classes.aboutText} variant='body1'>
                            I will be graduating from the
                            &nbsp;
                            <Link color='secondary' href='https://www.wisc.edu/' target='_blank'>
                                University of Wisconsin - Madison
                            </Link>
                            &nbsp;
                            with a Bachelor's Degree in Computer Sciences and Mathematics.
                        </Typography>

                        <Typography className={classes.aboutText} variant='body1'>
                            Here are recent technologies I have been working with:
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
                            <ImageViewer {...globals.image}/>
                        </div>
                    </Grid>
                }
            </Grid>
        </div>
    );
};

export default withFade(About);
