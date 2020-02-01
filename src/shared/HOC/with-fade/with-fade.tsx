import React from 'react';
import Fade from 'react-reveal/Fade';

import { WithFadeProps } from './with-fade.props';

export const withFade = <T extends {}>(WrappedComponent: React.FC<T>): React.FC<WithFadeProps & T> => {
    return (fadeProps: WithFadeProps & T) => {
        return (
            <>
                {
                    fadeProps.fade &&
                    <Fade>
                        <WrappedComponent {...fadeProps}/>
                    </Fade>
                }
                {
                    !fadeProps.fade &&
                    <WrappedComponent {...fadeProps}/>
                }
            </>
        );
    };
};
