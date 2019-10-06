import React from 'react';
import { Typography, makeStyles, createStyles } from '@material-ui/core';

import { withFade } from '../shared';
import { HomeItemContainer } from './home-item-container';

const useStyles = makeStyles((theme) =>
    createStyles({
        contactText: {
            color: theme.palette.text.hint,
            marginBottom: '24px',
        },
    }),
);

const Contact: React.FC = () => {
    const classes = useStyles();

    return (
        <HomeItemContainer header='Contact Me'>
            <Typography variant='body1'>
                Contact info
            </Typography>
        </HomeItemContainer>
    );
};

export default withFade(Contact);
