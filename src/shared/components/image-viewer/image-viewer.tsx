import React from 'react';
import { makeStyles, createStyles, Box } from '@material-ui/core';

import { Image } from '../..';

const useStyles = makeStyles((theme) =>
    createStyles({
        overlay: {
            position: 'absolute',
            width: 'inherit',
            height: 'inherit',
            backgroundColor: 'red',
        },
        defaultImage: {
            display: 'block',
            borderRadius: '4px',
            filter: 'grayscale(100%)',
            maxWidth: '100%',
            maxHeight: '100%',
            '&:hover': {
                filter: 'grayscale(0%)',
            },
            transition: 'filter 750ms',
        },
    }),
);

export const ImageViewer: React.FC<Image & ImageViewerProps> = (props: Image & ImageViewerProps) => {
    const classes = useStyles();

    return (
        <Box boxShadow={4}>
            <img
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
