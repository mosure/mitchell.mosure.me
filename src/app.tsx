import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Home } from './home';
import { Projects } from './projects';

export const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/projects' component={Projects}/>

                    <Redirect to='/'/>
                </Switch>
            </BrowserRouter>
        </>
    );
};
