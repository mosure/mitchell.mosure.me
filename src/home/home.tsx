import React from 'react';
import {
    WithStyles,
    withStyles,
    createStyles,
    makeStyles,
} from '@material-ui/core';

import Header from './header';
import Footer from './footer';
import Landing from './landing';
import { homeItems } from './home.db';

const styles = createStyles({
    homeSection: {
        padding: '150px 0px',
    },
});

const useStyles = makeStyles((theme) =>
    createStyles({
        homeContainer: {
            [theme.breakpoints.up('xs')]: {
                padding: '0px 15px',
            },
            [theme.breakpoints.up('sm')]: {
                padding: '0px 50px',
            },
            [theme.breakpoints.up('md')]: {
                padding: '0px 150px',
            },
            [theme.breakpoints.up('lg')]: {
                padding: '0px 250px',
            },
        },
    }),
);

const SuperContainer: React.FC = (props) => {
    const classes = useStyles();

    return (
        <section id='Home' className={classes.homeContainer}>
            {props.children}
        </section>
    );
};

interface IProps extends WithStyles<typeof styles> {}

class Home extends React.Component<IProps> {
    render() {
        return (
            <>
                <Header/>

                <SuperContainer>
                    <Landing/>
                    {
                        homeItems.map((homeItem, index) => {
                            const Child = homeItem.content;

                            let style = {};
                            if (index === 0) {
                                style = {
                                    paddingTop: '0px',
                                };
                            }

                            return (
                                <section
                                    id={homeItem.name || ''}
                                    key={index}
                                    style={style}
                                    className={this.props.classes.homeSection}
                                >
                                    <Child {...homeItem}/>
                                </section>
                            );
                        })
                    }
                </SuperContainer>

                <Footer/>
            </>
        );
    }
}

export default withStyles(styles)(Home);
