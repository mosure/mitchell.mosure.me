import { ExperienceList } from '../shared';

import * as ctech from '../assets/experiences/ctech.png';

export const experiences: ExperienceList = [
    {
        position: 'Software Engineering Intern',
        organization: 'CTech Manufacturing',
        description: [
            'Worked with several evolving frameworks and platforms such as JavaScript, TypeScript, AngularJS, Angular, C#, .NET Core, and ASP.NET.',
            'Developed code specific to company workflows, product design, engineering, and supporting systems.',
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
