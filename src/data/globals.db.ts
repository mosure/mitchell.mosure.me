import { Globals } from '../shared';

import * as me from '../assets/me.jpg';

export const globals: Globals = {
    greeting: 'Hello, my name is',
    firstName: 'Mitchell',
    lastName: 'Mosure',
    statement: 'I build computer systems.',
    description: `
I am a full-stack software engineer from Madison, WI with interests in
designing and building robust, high-quality technologies from silicon to web.
`,
    email: 'mitchell@mosure.me',
    githubUrl: 'https://github.com/Mosure',
    linkedinUrl: 'https://www.linkedin.com/in/mosure',
    image: {
        src: me.default,
        caption: 'Profile Image',
    },
    toolkit: [
        'C#',
        'Python',
        'React',
        'Angular',
        'SQL',
        'MongoDB',
        'Node.js',
        'AWS',
    ],
};
