import { ProjectList } from '../shared';

import { mixImages, sputterImages, garboScoreImages } from '../assets/projects';

export const projects: ProjectList = [
    {
        name: 'GarboScore',
        description: 'MadHacks - Carbon 2019 Hackathon Submission',
        period: 'October 19th - 20th, 2019',
        technologies: [
            'React',
            'GCP',
            'Firebase',
            'AutoML',
            'MongoDB',
            'TypeScript',
        ],
        github: 'https://github.com/Mosure/GarboScore',
        url: 'https://garboscore.tech',
        images: garboScoreImages,
    },
    {
        name: 'Sputter Deposition',
        description: 'DC Sputtering Magnetron. Planning to create gold mirrored sunglasses.',
        period: 'September 2019 - Present',
        technologies: [
            'PVD',
            'Vacuum System',
        ],
        images: sputterImages,
    },
    {
        name: 'mitchell.mosure.me',
        description: 'Personal website version one. Built with React and TypeScript. Uses an AWS CodePipeline to deploy to AWS CloudFront.',
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
        description: 'Raspberry Pi LED strip music visualizer. Uses FFT and different rendering techniques to deliver a unique audio/visual experience.',
        period: 'August 2018 - October 2019',
        github: 'https://github.com/Mosure/Lux',
        technologies: [
            'Python',
            'C',
        ],
        url: 'https://youtu.be/lQLU-blq2bU',
    },
    {
        name: 'Mix',
        description: 'Raspberry Pi fridge drink mixing software. Developed UI and simple REST connected pump controller.',
        period: 'January 2019 - May 2019',
        github: 'https://github.com/Mosure/Mix',
        technologies: [
            'Angular',
            'TypeScript',
            'Python',
            'Django',
        ],
        images: mixImages,
    },
    {
        name: 'Nano Speed Test',
        description: 'Nano cryptocurrency transfer speed test. I worked primarily on the distributed proof of work service alongside the SQL Django models but also assisted in backend REST development and unit testing.',
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
