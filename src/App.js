import React, { Component } from 'react';
import {  Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/detail';
import store from './store';
import Header from './common/header'
class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Header />
          <Router>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </Router>
        </Provider>
    );
  }
}

export default App;