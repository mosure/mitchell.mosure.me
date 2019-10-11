import { ImageList } from '../shared';

import * as amsterdam from '../assets/travel/amsterdam.jpg';
import * as delos from '../assets/travel/delos.jpg';
import * as glacier from '../assets/travel/glacier.jpg';
import * as muenster from '../assets/travel/muenster.jpg';
import * as mykonos from '../assets/travel/mykonos.jpg';
import * as wood_post from '../assets/travel/wood_post.jpg';

export const images: ImageList = [
    {
        alternateText: 'Amsterdam',
        path: amsterdam.default,
        rows: 2,
    },
    {
        alternateText: 'Glacier',
        path: glacier.default,
    },
    {
        alternateText: 'Muenster',
        path: muenster.default,
    },
    {
        alternateText: 'Mykonos',
        path: mykonos.default,
    },
    {
        alternateText: 'Delos Wood Post',
        path: wood_post.default,
    },
    {
        alternateText: 'Delos',
        path: delos.default,
        rows: 2,
    },
];
