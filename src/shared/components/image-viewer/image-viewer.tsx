import React from 'react';
import { Image } from '../..';

export const ImageViewer: React.FC<Image> = (image: Image) => {
    return (
        <img src={image.path} alt={image.alternateText}/>
    );
};
