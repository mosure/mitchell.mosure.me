import React from 'react';
import { Element } from 'react-scroll';

import { AnchorProps } from './anchor.props';

export const asAnchor = <T extends {}>(WrappedComponent: React.FC<T>): React.FC<AnchorProps & T> => {
    return (anchorProps: AnchorProps & T) => {
        return (
            <Element name={anchorProps.name}>
                <WrappedComponent
                    {...anchorProps}
                />
            </Element>
        );
    };
};
