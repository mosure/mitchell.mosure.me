import { ExperienceList } from '../shared';

import * as ctech from '../assets/experiences/ctech.png';

export const experiences: ExperienceList = [
    {
        position: 'Software Engineering Intern',
        organization: 'CTech Manufacturing',
        description: [
            'Description Line 1',
            'Description Line 2',
        ],
        location: 'Weston, Wisconsin',
        period: 'September, 2014 - September, 2019',
        url: 'https://www.ctechmanufacturing.com/',
        image: {
            alternateText: 'CTech Logo',
            path: ctech.default,
        },
    },
];
