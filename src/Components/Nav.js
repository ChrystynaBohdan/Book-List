import React, {Component} from "react";
import {Link} from "react-router-dom";

class Nav extends Component{
    componentWillMount() {
       this.props.notifyPathname(window.location.pathname)
    }
    render() {
        return(
            <div>
                {
                    this.props.pathname === '/'?
                       <Link to='/create'>
                           <button className="btn btn-outline-success" type="button">Add New</button></Link>: ''

                }
            </div>
        )
    }
}
export default Nav;