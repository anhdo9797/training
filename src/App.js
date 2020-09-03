import React from 'react';

import { Route, Switch, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import 'antd/dist/antd.css';

import Auth from './Pages/Auth';
import store from './store/store';
import Main from './Pages/Main';

function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <div>
                    <Switch>
                        <Route path="/" exact component={Auth} />
                        <Route path="/main" component={Main} />
                    </Switch>
                </div>
            </HashRouter>
        </Provider>
    );
}

export default App;
