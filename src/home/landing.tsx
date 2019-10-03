import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    fullHeight: {
        height: '100%',
    },
});

const Landing: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.fullHeight}>
            I am MITCHELL MOSURE
        </div>
    );
};

export default Landing;
