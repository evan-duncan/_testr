import React, { Component } from 'react';
import './App.css';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store';
import { Grid } from 'react-flexbox-grid';
import Routes from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="App">
          <Header />
          <section className="content">
            <Grid fluid>
              <Routes />
            </Grid>
          </section>
          <Footer />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
