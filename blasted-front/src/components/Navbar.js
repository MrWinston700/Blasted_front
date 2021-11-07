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
          <button onClick={this.toggleDropDown} className="dropbtn">Dropdown</button>
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
