import React from 'react';
import { Typography } from '@material-ui/core';

import { withFade } from '../shared';
import { HomeItemContainer } from './home-item-container';

const Projects: React.FC = () => {
    return (
        <HomeItemContainer header='Projects'>

        </HomeItemContainer>
    );
};

export default withFade(Projects);
