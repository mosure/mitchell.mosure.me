import React from 'react';
import Fade from 'react-reveal/Fade';

import { Header } from './header';
import { homeItems } from './home.db';

export class Home extends React.Component {
    render() {
        return (
            <>
                <Header/>
                {
                    homeItems.map((homeItem) => {
                        const Child = homeItem.content;

                        return (
                            <Fade key={homeItems.indexOf(homeItem)}>
                                <Child {...homeItem}/>
                            </Fade>
                        );
                    })
                }
            </>
        );
    }
}
