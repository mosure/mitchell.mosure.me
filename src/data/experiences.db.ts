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
        period: '',
        url: 'LINK TO CTECH',
        image: {
            alternateText: 'CTech Logo',
            path: ctech.default,
        },
    },
];
