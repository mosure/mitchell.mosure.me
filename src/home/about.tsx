import React from 'react';
import { asAnchor, withFade } from '../shared';

const About: React.FC = () => {
    return (
        <div style={{height: '1000px'}}>
            <h1 className=''>About me</h1>
        </div>
    );
};

export default withFade(asAnchor(About));
