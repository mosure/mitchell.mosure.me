import { ExperienceList } from '../shared';

export const experiences: ExperienceList = [
    {
        position: 'Software Engineering Intern',
        organization: 'CTech Manufacturing',
        description: [
            'Description Line 1',
            'Description Line 2',
        ],
        location: 'Weston Wisconsin',
        startDate: new Date(),
        endDate: new Date(),
        url: 'LINK TO CTECH',
        image: {
            alternateText: 'CTech Logo',
            path: 'assets/ctech.png',
        },
    },
    {
        position: 'Software Engineering',
        organization: 'CTech Manufacturing',
        description: [
            'Description Line 1',
            'Description Line 2',
        ],
        location: 'Weston Wisconsin',
    },
];
