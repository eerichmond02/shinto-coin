import React, { Component } from 'react';
//import logo from './logo.svg';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Home';
import Mine from './Mine';
import Buy from './Buy';
import Sell from './Sell';
import Ledger from './Ledger';
import LedgerTransactionDetails from './LedgerTransactionDetails'


const CustomLink = ({label, to, exact}) => (
  <Route path={to} exact={exact} children={ ({match}) => (
    <li className={match ? 'active tab-title' : 'tab-title'}>
      <Link to={to}>{label}</Link>
    </li>
  )
  } />
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='App'>
        <header>
          <div id='logo' className='icon-ill-coin'></div>
          <ul className='tabs'>
            <CustomLink label='Home' to='/' exact={true}/>
            <CustomLink label='Mine Coins' to='/mine' />
            <CustomLink label='Buy Coins' to='/buy' />
            <CustomLink label='Sell Coins' to='/sell' />
            <CustomLink label='Ledger' to='/ledger' />
          </ul>
        </header>
        <Route path='/' exact component={Home} />
        <Route path='/mine' component={Mine} />
        <Route path='/buy' component={Buy} />
        <Route path='/sell' component={Sell} />
        <Route path='/ledger' component={Ledger} />
        <Route path="/transaction/:id" component={LedgerTransactionDetails} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
