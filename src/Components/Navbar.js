import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../Images/1702983619109.jpg"

export default function Navbar() {
    return (
        < div className=' h-50 d-flex justify-content-md-between  border-none text-white bg-primary'>
            <div className='mt-0'>
                <img className=' ms-5 m-1   rounded-circle  ' style={{ height: "50px" }} src={logo} alt='logo' />
            </div>
            <div>
                <nav className="navbar navbar-expand-lg text-white me-5  ">

                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to={"/"} className="nav-link text-white" >Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={"/services"} className="nav-link text-white" >Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/about"} className="nav-link text-white"  >About</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white"
                                    id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Community
                                </Link>
                                <div className="dropdown-menu mt-4 bg-primary" aria-labelledby="navbarDropdown">
                                    
                                    <Link to={"/community"} className="dropdown-item text-white ">Community</Link>

                                    <Link to={"/partners"} className="dropdown-item text-white" >Partners</Link>

                                    <Link data-bs-toggle="modal" data-bs-target="#exampleModal" className="dropdown-item text-white" >Contact Us</Link>
                                    
                                </div>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>
        </div >

    )
}
