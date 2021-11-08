import React, { Component }from 'react'
import { NavLink } from 'react-router-dom';
//import { log_out } from '../actions/index'
//import { connect } from 'react-redux';
//import axios from "axios";
//import swal from 'sweetalert';

class Navbar extends Component {
  
//   handleLogoutClick() {
//     axios
//       .delete("http://localhost:3001/logout", { withCredentials: true })
//       .then(response => {
//         if (response.data.logged_out === true) {
//           swal("you've been logged out")
//           this.props.log_out()
//         }
//       })
//       .catch(error => {
//         console.log("logout error", error);
//       });
//   }
    componentDidMount() {
     this.smallOrLargeScreen()
    }

  toggleDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  smallOrLargeScreen() {
    console.log(window.innerWidth)
    if (window.innerWidth <= 1000) {
      return ( 
      <div id="nav_head">
        <h1 id="nav_heading">Blasted</h1>
        <div className="dropdown">

          <button onClick={this.toggleDropDown} className="dropbtn"> 
            <svg width="50" height="50" viewBox="0 0 100 100">
            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className="line line2" d="M 20,50 H 80" />
            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
          </button>

         

          <div id="myDropdown" className="dropdown-content">
            <nav>
            <ul>
              <NavLink
              className = "navLinks"
              to="/"
              exact
              >Commitment to Safety</NavLink>
  
              <NavLink
              className = "navLinks"
              to="/"
              exact
              >Emission Target</NavLink>
  
              <NavLink
              className = "navLinks"
              to="/about"
              exact
              >About</NavLink>
  
              <NavLink
              className = "navLinks"
              to="/signin"
              exact
              >Fleet</NavLink>
            
              <NavLink
              className = "navLinks"
              to="/signup"
              exact
              >Sign in/ Sign up</NavLink>
  
              <NavLink
              className = "navLinks"
              to="/logout"
              exact
              >Access center</NavLink>
            </ul>
          </nav>
        </div>
      
      </div>
    </div> )
    } else {
      return (
        <div id="nav_head">
          <h1 id="nav_heading">Blasted</h1>
          <nav>
          <ul>
          <NavLink
            className = "navLinks"
            to="/"
            exact
          >Commitment to Safety</NavLink>
  
          <NavLink
            className = "navLinks"
            to="/"
            exact
          >Emission Target</NavLink>
  
          <NavLink
            className = "navLinks"
            to="/about"
            exact
          >About</NavLink>
  
          <NavLink
            className = "navLinks"
            to="/signin"
            exact
          >Fleet</NavLink>
            
          <NavLink
            className = "navLinks"
            to="/signup"
            exact
          >Sign in/ Sign up</NavLink>
  
          <NavLink
            className = "navLinks"
            to="/logout"
            exact
          >Access center</NavLink>
          </ul>
          </nav>
        </div>
      )

    }
    console.log(window.innerHeight)
  }
  render() {
    return (
      <div>
      {this.smallOrLargeScreen()}
      </div>
    )
  }
}
 

// const mapStateToProps = state => {
//   if (state.registration.user) {
//     return {
//       user: state.registration.user
//     }
//   } else {
//     return state
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     log_out: () => dispatch(log_out()),
//   }
// }

export default Navbar;
