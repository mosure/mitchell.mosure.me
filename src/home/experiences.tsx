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
        <div>
            {
                experiences.map((experience) => {
                    return (
                        <ExperienceItem key={experiences.indexOf(experience)} {...experience}/>
                    );
                })
            }
        </div>
    );
};

export default asAnchor(Experiences);
