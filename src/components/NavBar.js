import React from 'react'
import { Link } from 'react-router-dom'



export default function NavBar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">The Fresh Press</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li> */}
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Country
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <label className="dropdown-item" onClick={() => props.setCountryName('us')} >US</label>
                                    <label className="dropdown-item" onClick={() => props.setCountryName('in')} >INDIA</label>
                                    <label className="dropdown-item" onClick={() => props.setCountryName('jp')} >JAPAN</label>
                                    <label className="dropdown-item" onClick={() => props.setCountryName('nz')} >NUZILAND</label>
                                    <label className="dropdown-item" onClick={() => props.setCountryName('rs')} >RUSSIA</label>
                                    <label className="dropdown-item" onClick={() => props.setCountryName('it')} >ITALI</label>

                                </div>
                            </li>



                        </ul>



                    </div>
                    <div className="form-inline my-2 my-lg-0" style={{ color: "white" }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li >Country : {props.country}</li>
                        </ul>

                    </div>
                </div>
            </nav >


        </>
    )
}


