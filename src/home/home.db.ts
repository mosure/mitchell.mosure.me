import React from 'react';

import { WithFadeProps } from '../shared';

import Landing from './landing';
import About from './about';
import Experiences from './experiences';
import Projects from './projects';
import Contact from './contact';

export interface HomeItem extends WithFadeProps {
    name?: string;
    content: React.FC<WithFadeProps | {}>;
}

export interface HomeItems extends Array<HomeItem> {}

export const homeItems: HomeItems = [
    {
        content: Landing,
    },
    {
        name: 'About',
        fade: true,
        content: About,
    },
    {
        name: 'Experience',
        fade: true,
        content: Experiences,
    },
    {
        name: 'Projects',
        fade: true,
        content: Projects,
    },
    {
        name: 'Contact',
        fade: true,
        content: Contact,
    },
];
