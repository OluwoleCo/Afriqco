import React from 'react';
import { Link } from 'react-router-dom'


const styles = {
  container: {
    height: 200,
    textAlign: 'center',
    backgroundColor: '#FBFBFB'
  },
  heading: {
    marginTop: 50,
    fontSize: 50,
  },
  text: {
    fontSize: 20,
    color: '#BBBBBC'
  }
}
 const Nav = () =>
    // <div className="navbar navbar-default navbar-fixed-top" role="navigation">
    <div style={styles.container}>
      <div className="container">
        <div>
         <Link to='/companies'>
          <h3 style={styles.heading}>Afriqco</h3>
         </Link>
          <p style={styles.text}>Snapshot of Africa's most promising startups</p>
          <span style={{ width: 20, height: 20}} className="flag-icon flag-icon-us"></span>
        </div>
      </div>
    </div>

export default Nav;
