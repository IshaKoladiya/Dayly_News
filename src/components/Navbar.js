import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {

    const {mode,theme} = this.props;
    return (
      <>
        <nav className={`navbar navbar-expand-lg ${mode==="light"? "bg-dark" : "bg-light"}`} 
         data-bs-theme={mode === "light" ? "dark" : "light"}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">DailyNews</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Top Headlines</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/business">Bussiness</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/entertainment">entertainment</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/health">health</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/science">science</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/sports">sports</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/technology">technology</Link>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button type='button' className='btn btn-primary m-2' onClick={theme}>{mode==="light"?"Dark Mode":"Light Mode"}</button>
            </div>
        </div>
        </nav>
      </>
    )
  }
}
