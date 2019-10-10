import React from 'react';
import { makeStyles, createStyles, Box } from '@material-ui/core';
import posed from 'react-pose';

import { Image } from '../..';

const useStyles = makeStyles((theme) =>
    createStyles({
        defaultImage: {
            display: 'block',
            borderRadius: '4px',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }),
);

const HoverImage = posed.img({
    hoverable: true,
    init: {
        filter: 'grayscale(100%)',
        transition: {
            duration: 500,
        },
    },
    hover: {
        filter: 'grayscale(0%)',
        transition: {
            duration: 500,
        },
    },
});

export const ImageViewer: React.FC<Image & ImageViewerProps> = (props: Image & ImageViewerProps) => {
    const classes = useStyles();

    return (
        <Box boxShadow={props.shadow === undefined || props.shadow ? 4 : 0}>
            <HoverImage
                className={[props.className, classes.defaultImage].join(' ')}
                draggable={false}
                src={props.path}
                alt={props.alternateText}
            />
        </Box>
    );
};

export interface ImageViewerProps {
    className?: string;
}
