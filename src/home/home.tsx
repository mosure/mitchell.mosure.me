import React from 'react';

import Header from './header';
import Experiences from './experiences';
import About from './about';
import Footer from './footer';

export const Home: React.FC = () => {
    return (
        <>
            <Header tag='header' name='Mitchell Mosure' index={0}/>
            <Experiences tag='experiences' name='Experiences' index={1}/>
            <About tag='about' name='About Me' index={2}/>
            <Footer tag='footer' name='Social Media' index={3}/>
        </>
    );
};
