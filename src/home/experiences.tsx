import React from 'react';

import { experiences } from '../data';
import { asAnchor, Experience } from '../shared';

const Experience: React.FC<Experience> = (experience: Experience) => {
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
                        <Experience key={experiences.indexOf(experience)} {...experience}/>
                    );
                })
            }
        </>
    );
};

export default asAnchor(Experiences);
