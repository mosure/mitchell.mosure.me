import React from 'react';
import { makeStyles, createStyles, Typography, Grid, Link } from '@material-ui/core';
import { ArrowRightOutlined } from '@material-ui/icons';

import { experiences } from '../data';
import { Experience, withFade, ImageViewer } from '../shared';
import { HomeItemContainer } from './home-item-container';

const useStyles = makeStyles(() =>
    createStyles({
        experienceContainer: {
            padding: '48px 0px',
        },
        position: {
            fontSize: '1.1em',
            paddingBottom: '4px',
        },
        organization: {
            fontSize: '2em',
            paddingBottom: '4px',
        },
        location: {
            fontSize: '1.1em',
            paddingBottom: '16px',
        },
        description: {
            paddingBottom: '16px',
        },
        descriptionItem: {
            display: 'flex',
        },
        imageContainer: {
            maxWidth: '300px',
            maxHeight: '250px',
            margin: 'auto',
            width: '100%',
            height: '100%',
        },
    }),
);

const ExperienceItem: React.FC<Experience> = (experience: Experience) => {
    const classes = useStyles();

    return (
        <div className={classes.experienceContainer}>
            <Grid container spacing={3} justify='center' alignItems='center'>
                <Grid xs={12} md={4} item>
                    <Grid container className={classes.imageContainer} justify='center' alignItems='center'>
                        <Grid item>
                            <ImageViewer {...experience.image}/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={12} md={8} item>
                    <Link color='secondary' href={experience.url} target='_blank'>
                        <Typography variant='h1' className={classes.organization}>
                            {experience.organization}
                        </Typography>
                    </Link>

                    <Typography variant='h2' className={classes.position}>
                        {experience.position}
                        {
                            experience.period &&
                            (', ' + experience.period)
                        }
                    </Typography>

                    <Typography variant='h3' className={classes.location}>
                        {experience.location}
                    </Typography>

                    {
                        experience.description.map((description, index) => {
                            return (
                                <div key={index} className={classes.descriptionItem}>
                                    <ArrowRightOutlined color='secondary'/>
                                    <Typography
                                        key={index}
                                        variant='body1'
                                        className={classes.description}
                                    >
                                        {description}
                                    </Typography>
                                </div>
                            );
                        })
                    }
                </Grid>
            </Grid>
        </div>
    );
};

const Experiences: React.FC = () => {
    return (
        <HomeItemContainer header='Experiences'>
            {
                experiences.map((experience, index) => {
                    return (
                        <ExperienceItem key={index} {...experience}/>
                    );
                })
            }
        </HomeItemContainer>
    );
};

export default withFade(Experiences);
