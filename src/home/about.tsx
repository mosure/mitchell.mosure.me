import React from 'react';
import { asAnchor } from '../shared';

const About: React.FC = () => {
    return (
        <div style={{height: '1000px'}}>
            <h1>About me</h1>
        </div>
    );
};

export default asAnchor(About);
