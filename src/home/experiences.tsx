import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import { experiences } from '../data';
import { Experience, withFade } from '../shared';
import { HomeItemContainer } from './home-item-container';

const useStyles = makeStyles(() =>
    createStyles({

    }),
);

const ExperienceItem: React.FC<Experience> = (experience: Experience) => {
    return (
        <>
            {experience.position} @ {experience.organization}
        </>
    );
};

const Experiences: React.FC = () => {
    const classes = useStyles();

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
