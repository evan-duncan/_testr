import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store';
import { Grid } from 'react-flexbox-grid';
import Routes from './Routes';
import Notifications from './components/Notifications';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="App">
          {this.props.hasHeader && <Nav />}
          <section className="content">
            <Grid fluid>
              <Routes />
            </Grid>
          </section>
          {this.props.hasFooter && <Footer />}
          <Notifications />
        </div>
      </ConnectedRouter>
    );
  }
}

export default connect(state => ({
  hasHeader: state.app.has_header,
  hasFooter: state.app.has_footer,
}))(App);
