import React from 'react';
import { Typography } from '@material-ui/core';

import { experiences } from '../data';
import { Experience, withFade, useInlineHr } from '../shared';

const ExperienceItem: React.FC<Experience> = (experience: Experience) => {
    return (
        <>
            {experience.position} @ {experience.organization}
        </>
    );
};

const Experiences: React.FC = () => {
    const inlineClass = useInlineHr();

    return (
        <div>
            <Typography variant='h4' className={inlineClass.inlinehr}>
                Experiences
            </Typography>
            {
                experiences.map((experience, index) => {
                    return (
                        <ExperienceItem key={index} {...experience}/>
                    );
                })
            }
        </div>
    );
};

export default withFade(Experiences);
