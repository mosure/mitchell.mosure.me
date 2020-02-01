import { ImageList } from '../shared';

import * as amsterdam from '../assets/travel/amsterdam.jpg';
import * as delos from '../assets/travel/delos.jpg';
import * as glacier from '../assets/travel/glacier.jpg';
import * as muenster from '../assets/travel/muenster.jpg';
import * as mykonos from '../assets/travel/mykonos.jpg';
import * as wood_post from '../assets/travel/wood_post.jpg';

export const images: ImageList = [
    {
        caption: 'Amsterdam, Netherlands',
        src: amsterdam.default,
    },
    {
        caption: 'Logan\'s Pass - Glacier National Park',
        src: glacier.default,
    },
    {
        caption: 'Muenster, Germany',
        src: muenster.default,
    },
    {
        caption: 'Mykonos, Greece',
        src: mykonos.default,
    },
    {
        caption: 'Delos, Greece',
        src: delos.default,
    },
    {
        caption: 'Delos Wood Post',
        src: wood_post.default,
    },
];
