import React from 'react';

import { WithStyles, withStyles, createStyles } from '@material-ui/styles';

import Header from './header';
import Footer from './footer';
import { homeItems } from './home.db';

const styles = createStyles({
    sectionPadding: {
        paddingTop: '150px',
        paddingBottom: '150px',
    },
});

interface IProps extends WithStyles<typeof styles> {}

class Home extends React.Component<IProps> {
    render() {
        return (
            <>
                <Header/>
                {
                    homeItems.map((homeItem, index) => {
                        const Child = homeItem.content;

                        return (
                            <div key={index} className={this.props.classes.sectionPadding}>
                                <Child {...homeItem}/>
                            </div>
                        );
                    })
                }
                <Footer/>
            </>
        );
    }
}

export default withStyles(styles)(Home);
