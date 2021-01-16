import React, {useEffect} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase'
import { useProductContext } from './ProductProvider';
import Payment from './components/Payment';
import Orders from './components/Orders';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe("pk_test_51HubBlH7UmlcOp0AfrA4x4nCDXkYOWeoDoQ2gBmGgHGIX7Uy3gr34AfDdM3hN0Lv2J7iIPltB7z5IXsSjeWEayYR00d4MOkGBk");

function App() {
  const [{ }, dispatch] = useProductContext();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // the user just logged in / user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home/>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
