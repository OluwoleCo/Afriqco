import React from 'react';
import { Link } from 'react-router-dom'

import logo from './Afriq.png'

const styles = {
  container: {
    height: 200,
    textAlign: 'center',
    backgroundColor: '#FBFBFB',
    marginBottom: 40
  },
  heading: {
    marginTop: 50,
    fontSize: 50,
  },
  text: {
    fontSize: 20,
    color: '#BBBBBC'
  },

  logo: {
    height: 120,
    width: 120,
    borderRadius: 4
  }
}
 const Nav = () =>
    // <div className="navbar navbar-default navbar-fixed-top" role="navigation">
    <div style={styles.container}>
      <div className="container">
        <div style={{marginTop: 30}}>
         <Link to='/companies'>
          {/* <h3 style={styles.heading}>Afriqco</h3> */}
          <img style={styles.logo} src={logo} alt={"Afriqco"}/>

         </Link>
          <p style={styles.text}>Snapshot of Africa's most promising startups</p>
          <span style={{ width: 20, height: 20}} className="flag-icon flag-icon-us"></span>
        </div>
      </div>
    </div>

export default Nav;
