import React from 'react';
import { WithStyles, withStyles, createStyles, makeStyles } from '@material-ui/core';
import { Element } from 'react-scroll';

import Header from './header';
import Footer from './footer';
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
        <>
            <div className={classes.homeContainer}>
                {props.children}
            </div>
        </>
    );
};

interface IProps extends WithStyles<typeof styles> {}

class Home extends React.Component<IProps> {
    render() {
        return (
            <>
                <Header/>

                <SuperContainer>
                    {
                        homeItems.map((homeItem, index) => {
                            const Child = homeItem.content;

                            let style = {};
                            if (index === 0) {
                                style = {
                                    minHeight: '100vh',
                                };
                            }

                            return (
                                <Element
                                    name={homeItem.name || 'none'}
                                    key={index}
                                    style={style}
                                    className={this.props.classes.homeSection}
                                >
                                    <Child {...homeItem}/>
                                </Element>
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
