
import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import signuplogo from './und.png'
import signuplogotwo from './und1.png'
import SignupForm from './components/SignupForm'
import {BrowserRouter, Route} from 'react-router-dom';
import ForgotPass from './components/ForgotPass';
import Routers from './Routers';
import tApp from './tApp';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ServicePage from './components/ServicePage'
import PublishPage from './components/PublishPage'
import SchedulePage from './components/SchedulePage'
function App() {

  return (
  <BrowserRouter>
    <Switch>
    <Route path="/"  exact component ={tApp}></Route>
    <Route path="/forgot"  component = {ForgotPass}></Route>
    <Route path="/Signup"  component = {LoginForm}></Route>
    <Route path="/Services" component = {ServicePage}></Route>
    <Route path="/Publish"  component = {PublishPage}></Route>
    <Route path="/Schedule"  component = {SchedulePage}></Route>

    </Switch>

    </BrowserRouter>
  );
}

export default App;
