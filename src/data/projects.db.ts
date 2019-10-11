import { ProjectList } from '../shared';

import { sputterImages } from '../assets/projects';

export const projects: ProjectList = [
    {
        name: 'Sputter Deposition',
        description: 'DC Sputtering Magnetron',
        period: 'September 2019 - Present',
        technologies: [
            'PVD',
            'Vacuum System',
        ],
        images: sputterImages,
    },
    {
        name: 'mitchell.mosure.me',
        description: 'Personal website version one.',
        period: 'October 2019',
        github: 'https://github.com/Mosure/mitchell.mosure.me',
        url: 'https://mitchell.mosure.me',
        technologies: [
            'React',
            'TypeScript',
        ],
    },
    {
        name: 'Lux',
        description: 'Raspberry Pi LED strip music visualizer.',
        period: 'August 2018 - October 2019',
        github: 'https://github.com/Mosure/Lux',
        technologies: [
            'Python',
            'C',
        ],
    },
    {
        name: 'Mix',
        description: 'Raspberry Pi fridge drink mixing software.',
        period: 'January 2019 - May 2019',
        github: 'https://github.com/Mosure/Mix',
        technologies: [
            'Angular',
            'TypeScript',
            'Python',
            'Django',
        ],
    },
    {
        name: 'Nano Speed Test',
        description: 'Nano cryptocurrency transfer speed test.',
        period: 'September 2018 - December 2018',
        github: 'https://github.com/silverstar194/Nano-SpeedTest',
        url: 'https://nanospeed.live/',
        technologies: [
            'Django',
            'Python',
            'React',
            'SQL',
        ],
    },
];
