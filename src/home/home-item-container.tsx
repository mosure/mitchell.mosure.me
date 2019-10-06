import React from 'react';
import { Typography, makeStyles, createStyles } from '@material-ui/core';

import { useInlineHr } from '../shared';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            margin: '0px auto',
        },
    }),
);

export interface HomeItemContainerProps {
    header: string;
    maxWidth?: string;
}

export const HomeItemContainer: React.FC<HomeItemContainerProps> = (props) => {
    const inlineClass = useInlineHr();
    const classes = useStyles();

    return (
        <div style={{maxWidth: props.maxWidth || '1000px'}} className={classes.container}>
            <Typography variant='h4' className={inlineClass.inlinehr}>
                {props.header}
            </Typography>

            {props.children}
        </div>
    );
};
