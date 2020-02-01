import React from 'react';
import { makeStyles, createStyles, Box } from '@material-ui/core';
import posed from 'react-pose';
import ReactGA from 'react-ga';

import { Image } from '../..';

const useStyles = makeStyles(() =>
    createStyles({
        defaultImage: {
            display: 'block',
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

    const handleClick = () => {
        if (props.onClick) {
            props.onClick(props.src);
        }

        logImageClick();
    };

    const logImageClick = () => {
        ReactGA.event({
            category: 'Image',
            action: 'Clicked',
            label: props.caption,
        });
    };

    return (
        <Box boxShadow={props.shadow === undefined || props.shadow ? 4 : 0}>
            <HoverImage
                className={[props.className, classes.defaultImage].join(' ')}
                style={{borderRadius: props.borderRadius === undefined || props.borderRadius ? '4px' : '0px'}}
                draggable={false}
                src={props.src}
                alt={props.caption}
                onClick={handleClick}
                async
            />
        </Box>
    );
};

export interface ImageViewerProps {
    className?: string;
    borderRadius?: boolean;
    onClick?: (imageSource: string) => void;
}
