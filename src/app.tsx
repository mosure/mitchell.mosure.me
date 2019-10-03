import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Home } from './home';
import { Projects } from './projects';

export const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/projects' component={Projects}/>

            <Redirect to='/'/>
        </Switch>
    );
};
