import { ExperienceList } from '../shared';

import * as ctech from '../assets/experiences/ctech.png';
import * as madhacks from '../assets/experiences/madhacks.png';
import * as sudo_x from '../assets/experiences/sudo_x.png';
import * as uw from '../assets/experiences/uw.png';

export const experiences: ExperienceList = [
    {
        position: 'Software Engineer',
        organization: 'MadHacks - Carbon',
        description: [
            'Developed software pertaining to sustainability.',
            'Developed a full cloud app in less than 24 hours.',
            'Worked in a team of two.',
        ],
        location: 'Madison, Wisconsin',
        period: 'October 19th - 20th, 2019',
        url: 'https://www.madhacks.io/',
        image: {
            caption: 'MadHacks Logo',
            src: madhacks.default,
            shadow: false,
        },
    },
    {
        position: 'Founder',
        organization: 'Sudo.X',
        description: [
            'A playground for software ideas.',
            'Worked with many modern technologies such as AWS, TensorFlow, React, Angular, Node.js, and Python.',
            'Worked with a small team exploring software solutions targetting the Transcend Madison competition.',
        ],
        location: 'Madison, Wisconsin',
        period: 'April, 2017 - Present',
        image: {
            caption: 'Sudo.X Logo',
            src: sudo_x.default,
            shadow: false,
        },
    },
    {
        position: 'Student',
        organization: 'University of Wisconsin - Madison',
        description: [
            'B.S. in Computer Science and Mathematics',
        ],
        location: 'Madison, Wisconsin',
        period: 'September, 2016 - December, 2019',
        image: {
            caption: 'UW - Madison Logo',
            src: uw.default,
            shadow: false,
        },
    },
    {
        position: 'Software Engineer',
        organization: 'CTech Manufacturing',
        description: [
            'Worked with several evolving frameworks and platforms such as JavaScript, TypeScript, Angular, C#, .NET Core, ASP.NET, SQL, MongoDB, and Azure DevOps.',
            'Developed software specific to company workflows, product design, engineering, mechanical systems, and supporting systems.',
        ],
        location: 'Weston, Wisconsin',
        period: 'September, 2014 - September, 2019',
        url: 'https://www.ctechmanufacturing.com/',
        image: {
            caption: 'CTech Logo',
            src: ctech.default,
        },
    },
];
