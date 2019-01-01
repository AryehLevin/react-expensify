import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const title = 'Expensify Application';
    return (<div>
        <h1>{title}</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
      </div>  );
}
 
export default Header;

/*<NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>*/
