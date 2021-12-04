// import React, { Component } from 'react'

const NavBar= ({totalCounters})=>{/** stateless function component */
    return (
        <nav className="navbar navbar-light bg-light">
<button className="navbar-brand" >Navbar{""} <span className="badge badge-pill bg-secondary">{totalCounters}</span></button>

</nav>
    );

}

 
export default NavBar;