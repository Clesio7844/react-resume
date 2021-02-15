import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import Profiler from './components/Profile/Profile';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profiler />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className='main-content'>
              <Switch>
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>

                <Route path='/'>
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
