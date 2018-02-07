import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Home';
import Mine from './Mine';
import Buy from './Buy';
import Sell from './Sell';
import Ledger from './Ledger';

const CustomLink = ({label, to, exact}) => (
  <Route path={to} exact={exact} children={ ({match}) => (
    <li><Link to={to}>{label}</Link></li>
  )
  } />
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <header>
        </header>
        <ul>
          <CustomLink label='Home' to='/' exact={true}/>
          <CustomLink label='Mine Coins' to='/mine' />
          <CustomLink label='Buy Coins' to='/buy' />
          <CustomLink label='Sell Coins' to='/sell' />
          <CustomLink label='Ledger' to='/ledger' />
        </ul>
        <Route path='/' exact component={Home} />
        <Route path='/mine' component={Mine} />
        <Route path='/buy' component={Buy} />
        <Route path='/sell' component={Sell} />
        <Route path='/ledger' component={Ledger} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
