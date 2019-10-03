import React from 'react';

import { Header } from './header';
import { About } from './about';
import { Footer } from './footer';

export const Home: React.FC = () => {
    return (
        <>
            <Header/>

            <About/>

            <Footer/>
        </>
    );
};
