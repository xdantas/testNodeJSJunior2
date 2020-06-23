import React from 'react';
import { BrowserRouter as HashRouter, Link, Switch, Route } from "react-router-dom";
import Home from './components/home/index';
import Header from './components/header/index';
import Footer from './components/footer/index';

const Routes = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/">
                <Header />
                <Home />
                <Footer />
            </Route>
        </Switch>
    </HashRouter>
);

export default Routes;