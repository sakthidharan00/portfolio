import React from 'react';
import "./NavBar.css";




const NavBar = () => {
    return (
        <div className='container-fluid '>
            <nav className='navbar navbar-expand-sm sticky-top'>

                <div className='navbar-right navbar-brand' >
                    <img src={require("./logo.png")} alt="logo"></img>
                </div>

                <div className='navbar-left'>
                    <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#nav_collapse">  <span class="navbar-toggler-icon"></span></button>
                    <div className='collapse navbar-collapse' id='nav_collapse'>
                        <div className='navbar-nav'>
                            {/* <a className='nav-item nav-link' href='#Home'>Home</a> */}
                            <a className='nav-item nav-link' href='#Home'>Home</a>
                            <a className='nav-item nav-link' href='#Skills'>Skills</a>
                            <a className='nav-item nav-link' href='#Projects'>Projects  </a>
                            <a className='nav-item nav-link' href='#Contact'>Contact</a>


                        </div>

                    </div>

                </div>


            </nav>


        </div>
    )
}

export default NavBar
