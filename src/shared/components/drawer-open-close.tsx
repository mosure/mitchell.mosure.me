import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Menu, Close } from '@material-ui/icons';

export interface DrawerOpenCloseProps {
    open: boolean;
}

const IconAnimation = posed.div({
    enter: {
        opacity: 1,
        delay: 150,
        transition: {
            default: {
                duration: 300,
            },
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 150,
        },
    },
});

export const DrawerOpenClose: React.FC<DrawerOpenCloseProps> = (props) => {
    return (
        <>
            <PoseGroup>
                {
                    !props.open &&
                    <IconAnimation key='open'>
                        <Menu/>
                    </IconAnimation>
                }
            </PoseGroup>
            <PoseGroup>
                {
                    props.open &&
                    <IconAnimation key='close'>
                        <Close/>
                    </IconAnimation>
                }
            </PoseGroup>
        </>
    );
};
