import React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';

import Header from './header';
import Footer from './footer';
import { homeItems } from './home.db';

const styles = createStyles({
    homeContainer: {
        padding: '0px 150px',
    },
    homeSection: {
        padding: '150px 0px',
        margin: '0px auto',
    },
});

interface IProps extends WithStyles<typeof styles> {}

class Home extends React.Component<IProps> {
    render() {
        return (
            <>
                <Header/>

                <Container maxWidth='lg'>
                    {
                        homeItems.map((homeItem, index) => {
                            const Child = homeItem.content;

                            let style = {};
                            if (index === 0) {
                                style = {
                                    padding: '150px 0px',
                                    margin: '0px auto',
                                    minHeight: '100vh',
                                };
                            }

                            return (
                                <div key={index} style={style} className={this.props.classes.homeSection}>
                                    <Child {...homeItem}/>
                                </div>
                            );
                        })
                    }
                </Container>

                <Footer/>
            </>
        );
    }
}

export default withStyles(styles)(Home);
