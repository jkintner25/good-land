import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import SplashPage from './components/Splash/SplashPage';
import Beans from './components/Beans/Beans';
import About from './components/About/About';
import NewBeansForm from './components/Beans/NewBeansForm';
import Footer from './components/Footer/Footer';
import { readProducts } from './store/product';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(readProducts())
  }, [])

  return (
    <BrowserRouter>
      <div className='main'>
        <NavBar />
        <Switch>
          <Route path='/' exact={true}>
            <SplashPage />
          </Route>
          <Route path='/beans' exact={true}>
            <Beans />
          </Route>
          <Route path='/about' exact={true}>
            <About />
          </Route>
          <Route path='/new-beans'>
            <NewBeansForm />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
