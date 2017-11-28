import React, {Component} from 'react';

class Companies extends Component {

  render() {
    
    let asset = '../assets'
    let companiesStyle = {
      container: {
        // width: '100%',
        height: 130,
        backgroundColor: '#fff',
        borderTop: '2px solid #00D3AA',
        boxShadow: '0 1px 5px 0 rgba(0,0,0,.08)',
        borderRadius: 3,
        cursor: 'pointer',
        marginBottom: 40,
        paddingLeft: 10,
        paddingRight: 10,
       },
      image: {
        height: 100,
        width: 100,
        marginTop: 20,
        float: 'left',
      },
      content: {
        float: 'left',
        marginLeft: 5
      },
      title: {
        fontSize: 12,
        color: '#6d819c',
        fontWeight: 'bold'
      },
      description:{
        marginTop: '-10px',
        fontSize: 9,
        color: '#5c196b',
        fontWeight: 'bold'
      },
      country: {
        float: 'right'
      },
      button: {
        fontSize: 9,
        borderRadius: 0,
        color: '#fff',
        backgroundColor: '#ff7761',
        padding: '2px 10px',
        border: 'none'
      }
    }

    return (
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div style={companiesStyle.container}>
          <img style={companiesStyle.image} src={require('../assets/feed.jpg')} />
          <div style={companiesStyle.content}>
            <h2 style={companiesStyle.title}>ReadByHumans</h2>
            <p style={companiesStyle.description}>Articles, narrated by real people</p>
            <button style={companiesStyle.button}>Media</button>
            {/* <p style={companiesStyle.country}>Lagos</p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Companies;
