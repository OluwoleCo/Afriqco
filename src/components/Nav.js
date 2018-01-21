import React from 'react';

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
          <h3 style={styles.heading}>Afriqco</h3>
          <p style={styles.text}>Africa's most promising startups</p>
        </div>
      </div>
    </div>

export default Nav;
