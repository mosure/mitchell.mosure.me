import { Globals } from '../shared';

import * as me from '../assets/me.jpg';

export const globals: Globals = {
    greeting: 'Hello, my name is',
    firstName: 'Mitchell',
    lastName: 'Mosure',
    statement: 'I build ...',
    description: `
This is a description
`,
    email: 'mitchell@mosure.me',
    githubUrl: 'https://github.com/Mosure',
    linkedinUrl: 'https://www.linkedin.com/in/mosure',
    image: {
        path: me.default,
        alternateText: 'Profile Image',
    },
    toolkit: [
        'C#',
        'TypeScript',
        'React',
        'Angular',
        'Node.js',
        'MongoDB',
        'SQL',
        'AWS',
    ],
};
