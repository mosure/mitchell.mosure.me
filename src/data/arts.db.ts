import { ImageList } from '../shared';

import * as amsterdam from '../assets/travel/amsterdam.jpg';
import * as delos from '../assets/travel/delos.jpg';
import * as glacier from '../assets/travel/glacier.jpg';
import * as muenster from '../assets/travel/muenster.jpg';
import * as mykonos from '../assets/travel/mykonos.jpg';
import * as wood_post from '../assets/travel/wood_post.jpg';

export const images: ImageList = [
    {
        caption: 'Amsterdam',
        src: amsterdam.default,
        rows: 2,
    },
    {
        caption: 'Glacier',
        src: glacier.default,
    },
    {
        caption: 'Muenster',
        src: muenster.default,
    },
    {
        caption: 'Mykonos',
        src: mykonos.default,
    },
    {
        caption: 'Delos',
        src: delos.default,
        rows: 2,
    },
    {
        caption: 'Delos Wood Post',
        src: wood_post.default,
    },
];
