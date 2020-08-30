import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './Pages/Auth';

function App() {
  return (
    // <BrowserRouter>
    //   <>
    //     <Switch>
    //       <Route component={Auth} exact path="/" />
    //     </Switch>
    //   </>
    // </BrowserRouter>
    <Auth />
  );
}

export default App;
