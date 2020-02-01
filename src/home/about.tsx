import React from 'react';
import {
    createStyles,
    Grid,
    makeStyles,
    Typography,
    Link,
} from '@material-ui/core';
import { ArrowRightOutlined } from '@material-ui/icons';

import { HomeItemContainer } from './home-item-container';
import { withFade, ImageViewer } from '../shared';
import { globals } from '../data';

const useStyles = makeStyles((theme) =>
    createStyles({
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
            marginBottom: '24px',
        },
    }),
);

const About: React.FC = () => {
    const classes = useStyles();

    return (
        <HomeItemContainer header='About me'>
            <Grid
                container
                justify='center'
                className={classes.subContainer}
            >
                <Grid item xs={12} sm={6}>
                    <div className={classes.textContainer}>
                        <Typography className={classes.aboutText} variant='body1'>
                            I find most aspects of computing systems both interesting and fulfilling.
                            Long term, I plan to advance artificial general intelligence research.
                            Of the more widely used technologies, I enjoy working to solve machine learning,
                            computer vision, and optimization problems.
                        </Typography>

                        <Typography className={classes.aboutText} variant='body1'>
                            I will be graduating from the
                            {' '}
                            <Link color='secondary' href='https://www.wisc.edu/' target='_blank'>
                                University of Wisconsin - Madison
                            </Link>
                            {' '}
                            in the fall of 2019 with a Bachelor's Degree in Computer Sciences and Mathematics.
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
                                                    <Typography variant='body1'>
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
        </HomeItemContainer>
    );
};

export default withFade(About);
