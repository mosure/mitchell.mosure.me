import React from 'react';
import { Typography, makeStyles, createStyles } from '@material-ui/core';

import { withFade, useInlineHr } from '../shared';

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            minHeight: '800px',
        },
        contactText: {
            color: theme.palette.text.hint,
            marginBottom: '24px',
        },
    }),
);

const Contact: React.FC = () => {
    const inlineClass = useInlineHr();
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant='h4' className={inlineClass.inlinehr}>
                Say Hello
            </Typography>

            <Typography variant='body1'>
                Contact info
            </Typography>
        </div>
    );
};

export default withFade(Contact);
