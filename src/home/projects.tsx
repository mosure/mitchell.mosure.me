import React from 'react';

import { withFade } from '../shared';
import { HomeItemContainer } from './home-item-container';

const Projects: React.FC = () => {
    return (
        <HomeItemContainer header='Projects'/>
    );
};

export default withFade(Projects);
