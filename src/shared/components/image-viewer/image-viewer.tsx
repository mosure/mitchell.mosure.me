import React, { CSSProperties } from 'react';
import { Image } from '../..';

export const ImageViewer: React.FC<Image & ImageViewerProps> = (props: Image & ImageViewerProps) => {
    return (
        <img
            draggable={false}
            style={props.style}
            src={props.path}
            alt={props.alternateText}
        />
    );
};

export interface ImageViewerProps {
    style?: CSSProperties;
}
