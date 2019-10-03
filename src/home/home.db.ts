import React from 'react';

import { AnchorProps, WithFadeProps } from '../shared';

import Landing from './landing';
import About from './about';
import Experiences from './experiences';
import Projects from './projects';
import Contact from './contact';

export interface HomeItem extends AnchorProps, WithFadeProps {
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
        fade: true,
        content: About,
    },
    {
        name: 'Experience',
        tag: 'experience',
        fade: true,
        content: Experiences,
    },
    {
        name: 'Work',
        tag: 'project',
        fade: true,
        content: Projects,
    },
    {
        name: 'Contact',
        tag: 'contact',
        fade: true,
        content: Contact,
    },
];
