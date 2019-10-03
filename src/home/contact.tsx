import React from 'react';
import { asAnchor, withFade } from '../shared';

const Contact: React.FC = () => {
    return (
        <div>
            Contact
        </div>
    );
};

export default withFade(asAnchor(Contact));
