import React, {useEffect} from "react";
import {Link} from "react-router-dom";

const Nav = (props) => {
    useEffect(() => {
        props.notifyPathname(window.location.pathname)
    }, [])

    return (
        <div>
            {
                props.pathname === '/' ?
                    <Link to='/create'>
                        <button className="btn btn-outline-success" type="button">Add New</button>
                    </Link> : ''
            }
        </div>
    )
}
export default Nav;