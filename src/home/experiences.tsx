import React from 'react';

import { experiences } from '../data';
import { asAnchor, Experience } from '../shared';

const ExperienceItem: React.FC<Experience> = (experience: Experience) => {
    return (
        <>
            {experience.title}
        </>
    );
};

const Experiences: React.FC = () => {
    return (
        <>
            {
                experiences.map((experience) => {
                    return (
                        <ExperienceItem key={experiences.indexOf(experience)} {...experience}/>
                    );
                })
            }
        </>
    );
};

export default asAnchor(Experiences);
