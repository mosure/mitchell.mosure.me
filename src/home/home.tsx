import React from 'react';

import Header from './header';
import Footer from './footer';
import { homeItems } from './home.db';

export class Home extends React.Component {
    render() {
        return (
            <>
                <Header/>
                {
                    homeItems.map((homeItem, index) => {
                        const Child = homeItem.content;

                        return (
                            <Child key={index} {...homeItem}/>
                        );
                    })
                }
                <Footer/>
            </>
        );
    }
}
