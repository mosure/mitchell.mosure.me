import React from 'react';

import { Header } from './header';
import { homeItems } from './home.db';

export const Home: React.FC = () => {
    return (
        <>
            <Header/>
            {
                homeItems.map((homeItem) => {
                    const Child = homeItem.content;

                    return (
                        <Child key={homeItems.indexOf(homeItem)} {...homeItem}/>
                    );
                })
            }
        </>
    );
};
