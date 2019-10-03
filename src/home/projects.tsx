import React from 'react';
import { Link } from 'react-router-dom';

import { asAnchor } from '../shared';

const Projects: React.FC = () => {
    return (
        <>
            <Link to='/projects'/>
        </>
    );
};

export default asAnchor(Projects);
