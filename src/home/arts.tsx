import React from 'react';
import {
    makeStyles,
    createStyles,
} from '@material-ui/core';

import { withFade, Images } from '../shared';
import { HomeItemContainer } from './home-item-container';
import { images } from '../data/arts.db';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            paddingTop: '48px',
        },
    }),
);

const Arts: React.FC = () => {
    const classes = useStyles();

    return (
        <HomeItemContainer header='Travel'>
            <div className={classes.container}>
                <Images images={images}/>
            </div>
        </HomeItemContainer>
    );
};

export default withFade(Arts);
