import React, {Component, useState} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Books from "./Containers/Books";
import CreateBooks from "./Containers/CreateBooks";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Components/Nav';


const App = (props) => {
    const [pathname, notifyPathname] = useState('');

    return (
        <Router>
            <div className="App">
                <Nav notifyPathname={notifyPathname}
                     pathname={pathname}
                />
                <Switch>
                    <Route path='/'
                           exact
                           component={() => <Books/>}
                    />
                    <Route path='/create'
                           exact
                           component={() => <CreateBooks/>}
                    />
                </Switch>
            </div>
        </Router>
    )
}

export default App;
