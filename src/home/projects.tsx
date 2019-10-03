import React from 'react';
import { Link } from 'react-router-dom';

import { asAnchor } from '../shared';

const Projects: React.FC = () => {
    return (
        <div>
            <Link to='/projects'>Projects</Link>
        </div>
    );
};

export default asAnchor(Projects);
