import React from 'react';
import { makeStyles, createStyles, Typography, Grid, Link } from '@material-ui/core';

import { experiences } from '../data';
import { Experience, withFade, ImageViewer } from '../shared';
import { HomeItemContainer } from './home-item-container';

const useStyles = makeStyles(() =>
    createStyles({
        experienceContainer: {
            padding: '24px 0px',
        },
        position: {
            fontSize: '1.5em',
        },
        organization: {
            fontSize: '2em',
        },
        location: {

        },
        description: {
            paddingBottom: '24px',
        },
        imageContainer: {
            width: '300px',
            height: '250px',
            margin: 'auto',
        },
    }),
);

const ExperienceItem: React.FC<Experience> = (experience: Experience) => {
    const classes = useStyles();

    return (
        <div className={classes.experienceContainer}>
            <Grid container spacing={7} justify='center' alignItems='center' alignContent='center'>
                <Grid xs={12} sm={4} item>
                    <Grid container justify='center' alignItems='center' alignContent='center'>
                        <Grid item className={classes.imageContainer}>
                            <ImageViewer {...experience.image}/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={12} sm={8} item>
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
                                <Typography
                                    key={index}
                                    variant='body1'
                                    className={classes.description}
                                >
                                    {description}
                                </Typography>
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
