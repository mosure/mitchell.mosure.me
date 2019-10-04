import React from 'react';
import { asAnchor, withFade, useInlineHr } from '../shared';

const Contact: React.FC = () => {
    const inlineClass = useInlineHr();

    return (
        <div style={{minHeight: '800px'}}>
            <h1 className={inlineClass.inlinehr}>Contact</h1>

        </div>
    );
};

export default withFade(asAnchor(Contact));
