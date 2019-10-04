import React from 'react';

import { experiences } from '../data';
import { asAnchor, Experience, withFade } from '../shared';

const ExperienceItem: React.FC<Experience> = (experience: Experience) => {
    return (
        <>
            {experience.position} @ {experience.organization}
        </>
    );
};

const Experiences: React.FC = () => {
    return (
        <div>
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

export default withFade(asAnchor(Experiences));
