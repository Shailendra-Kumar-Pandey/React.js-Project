import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li> */}
          </ul>
          <div className="form-check form-switch mx-2">
            <input onClick={()=>{if(props.mode==="light"){props.setMode("dark");document.body.style.backgroundColor="#f55454c9";props.showAlert("Red Dark mode has been enable","success");}else{props.setMode("light");document.body.style.backgroundColor="white";props.showAlert("Light mode has been enable","success");}}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==='light'?'black':'white'}}>Enable to Red Dark Mode </label>
          </div>
          <div className="form-check form-switch mx-2">
            <input onClick={()=>{if(props.mode==="light"){props.setMode("dark");document.body.style.backgroundColor="#225f9b";props.showAlert("Blue Dark mode has been enable","success");}else{props.setMode("light");document.body.style.backgroundColor="white";props.showAlert("Light mode has been enable","success");}}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==='light'?'black':'white'}}>Enable to Blue Dark Mode </label>
          </div>
          <div
            className="form-check form-switch text-light"
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault" style={{color: props.mode==='light'?'black':'white'}}
            >
              Enable to Dark Mode
            </label>
          </div>
          <form className="d-flex mx-2" role="search">
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
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

// Navbar.defaultProps ={
//     // title: 'set title here',
//     about : 'About Us'
// }
