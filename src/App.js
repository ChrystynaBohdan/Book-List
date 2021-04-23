import React, {Component} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Books from "./Containers/Books";
import CreateBooks from "./Containers/CreateBooks";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Components/Nav';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pathname: ''
        };
        this.notifyPathname = this.notifyPathname.bind(this);
    }
    notifyPathname(pathname){
        this.setState({
            pathname:pathname,
            }
        )
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Nav notifyPathname = {this.notifyPathname}
                         pathname = {this.state.pathname}
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
}

export default App;
