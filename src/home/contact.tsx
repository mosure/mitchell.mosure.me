import React from 'react';
import { Typography, makeStyles, createStyles, Link, Button } from '@material-ui/core';
import ReactGA from 'react-ga';

import { withFade } from '../shared';
import { HomeItemContainer } from './home-item-container';
import { globals } from '../data';

const useStyles = makeStyles((theme) =>
    createStyles({
        topOffset: {
            paddingTop: '24px',
        },
        buttonOffset: {
            marginTop: '36px',
        },
    }),
);

const Contact: React.FC = () => {
    const classes = useStyles();

    const logContactEmail = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Email Me',
            label: 'Contact',
        });
    };

    return (
        <HomeItemContainer header='Contact Me' maxWidth={'500px'}>
            <Typography variant='body1' className={classes.topOffset} gutterBottom>
                Feel free to message me on
                &nbsp;
                <Link href={globals.linkedinUrl} target='_blank' color='secondary'>
                    LinkedIn
                </Link>
                &nbsp;
                or via email.
            </Typography>

            <Typography variant='body1'>
                I am currently looking for a full-time position but also enjoy working on side projects.
            </Typography>

            <Button
                target='_blank'
                href='mailto:mitchell@mosure.me?subject=Website Inquiry - Contact Me'
                variant='outlined'
                color='secondary'
                className={classes.buttonOffset}
                onClick={logContactEmail}
            >
                Email Me
            </Button>
        </HomeItemContainer>
    );
};

export default withFade(Contact);
