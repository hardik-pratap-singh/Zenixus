import React from 'react'
import Modal from './Modal'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
// useNavigate
const Navbar = () => {

    let navigate = useNavigate() ; 

    let someref = useRef(null) ; 
    
    const openModal = (someref) => {
        someref.current.click() ; 
    }

    const handleLogout = () => {
        localStorage.removeItem('token') ; 
        navigate("/") ; 
      }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary dark">
            {/* <nav className="navbar bg-dark border-bottom border-bottom-light" data-bs-theme="dark"> */}
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Zenixus</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item"> */}
                                {/* <a className="nav-link" onClick={openModal()} href="/">My Info</a> */}

                            {/* </li> */}
                            {localStorage.getItem('token') &&  <Modal openmodal = {openModal} /> }
                            
                            
                        </ul>

                        {
                    localStorage.getItem('token') && <button type="button" class="btn btn-primary" onClick={handleLogout}>Log Out</button>
                        }
                       
                    </div>
                </div>

                
            </nav>
        </div>
    )
}

export default Navbar
