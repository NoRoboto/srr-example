import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ session }) => {
  const { isLogged } = session.network;
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {isLogged && (<li><p>Hi user!</p></li>)}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  session: state.loggedIn,
});

Header.propTypes = {
  session: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps)(Header);
