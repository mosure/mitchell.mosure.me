import React from 'react';
import { Typography } from '@material-ui/core';

import { withFade, useInlineHr } from '../shared';

const Projects: React.FC = () => {
    const inlineClass = useInlineHr();

    return (
        <div>
            <Typography variant='h4' className={inlineClass.inlinehr}>
                    Projects
            </Typography>
        </div>
    );
};

export default withFade(Projects);
