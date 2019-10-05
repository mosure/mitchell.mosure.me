import React, { CSSProperties } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import { Image } from '../..';

const useStyles = makeStyles((theme) =>
    createStyles({
        overlay: {

        },
    }),
);

export const ImageViewer: React.FC<Image & ImageViewerProps> = (props: Image & ImageViewerProps) => {
    const classes = useStyles();

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
