import React from 'react';

import { withFade, useInlineHr } from '../shared';

const About: React.FC = () => {
    const inlineClass = useInlineHr();

    return (
        <div style={{minHeight: '800px'}}>
            <h1 className={inlineClass.inlinehr}>About me</h1>

        </div>
    );
};

export default withFade(About);
