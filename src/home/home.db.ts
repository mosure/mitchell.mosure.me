import React from 'react';

import { AnchorProps } from '../shared';

import Landing from './landing';
import About from './about';
import Experiences from './experiences';
import Projects from './projects';
import Contact from './contact';

export interface HomeItem extends AnchorProps {
    name?: string;
    content: React.FC<AnchorProps | {}>;
}

export interface HomeItems extends Array<HomeItem> {}

export const homeItems: HomeItems = [
    {
        content: Landing,
    },
    {
        name: 'About',
        tag: 'about',
        content: About,
    },
    {
        name: 'Experience',
        tag: 'experience',
        content: Experiences,
    },
    {
        name: 'Work',
        tag: 'project',
        content: Projects,
    },
    {
        name: 'Contact',
        tag: 'contact',
        content: Contact,
    },
];
