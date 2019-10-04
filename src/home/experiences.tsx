import React from 'react';

import { experiences } from '../data';
import { asAnchor, Experience, withFade, useInlineHr } from '../shared';

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
            <h1 className={inlineClass.inlinehr}>Experiences</h1>
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
