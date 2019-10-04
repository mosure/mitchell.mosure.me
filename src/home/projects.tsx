import React from 'react';

import { withFade, useInlineHr } from '../shared';

const Projects: React.FC = () => {
    const inlineClass = useInlineHr();

    return (
        <div>
            <h1 className={inlineClass.inlinehr}>Projects</h1>
        </div>
    );
};

export default withFade(Projects);
