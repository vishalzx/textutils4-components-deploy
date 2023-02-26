import React from "react"; //short_hand:rfc
import PropTypes from "prop-types"; //short_hand:impt
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom"; 

export default function Navbar(props) {
  //here we are accepting the properties of component
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        {/*here we are applying properties */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/about">
                About
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link disabled" to="/">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          
          <div className="themes" style={{color: props.mode=='light'?'black':'white'}}>
            <div className="form-check form-check-inline" >
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onClick={props.onGreen}/>
              <label className="form-check-label" htmlFor="inlineRadio1">Green</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onClick={props.onBlue}/>
              <label className="form-check-label" htmlFor="inlineRadio2">Blue</label>
            </div>
          </div>
          
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div
        className={`form-check form-switch form-check-reverse text-${
          props.mode == "light" ? "dark" : "light"
        } mx-4`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckReverse"
          onClick={props.toggleMode}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckReverse">
          Visibility Mode
        </label>
      </div>
    </nav>
  );
}
// Now we'll fix the type of props so that incase of invalid type error occur
Navbar.propTypes = {
  title: PropTypes.string, //here we fixed the type of title as 'string'
  aboutText: PropTypes.string, //here we fixed the type of aboutText as 'string'
};

// Navbar.propTypes={
//     title: PropTypes.string.isRequired,  //if we add 'isRequired' then it will generate error if we don't pass 'title' and 'aboutText'. ig we use 'isRequired' then not necessary to use 'defaultProps' section
//     aboutText: PropTypes.string.isRequired
// }

// //Now we'll set default values of props incase values are not passed
Navbar.defaultProps = {
  title: "set title here",
  aboutText: "set About text here",
};
