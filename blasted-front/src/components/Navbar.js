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

  render() {
    return (
      <div id="head">
        <h1 id="heading">Blasted</h1>
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
