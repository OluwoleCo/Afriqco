import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { fetchData } from '../actions/companiesAction'

// Route
import { Link } from 'react-router-dom'
import { Image } from 'cloudinary-react';


class Companies extends Component {
  state = {
    companies: [
      {
        name: 'Asoriba',
        description: 'Church APp',
        industry: 'SAAS'
      }
    ]
  } 
  componentDidMount() {  
    let url ='https://afriqco.herokuapp.com/companies'
    this.props.fetchData(url)
  }

  render() {
    

    let companiesStyle = {
      container: {
        // width: '100%',
        height: 130,
        backgroundColor: '#fff',
        borderTop: '2px solid #FBECEC',
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
        // float: 'left',
        marginLeft: 108
      },
      title: {
        fontSize: 18,
        color: '#6d819c',
        fontWeight: 'bold'
      },
      description: {
        marginTop: '-10px',
        fontSize: 12,
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
    let companies = this.props.companies;
    let companyOne = this.props.companies[0];
    let coy;

  
    if (companies && companyOne) { 
      coy = companies.map(company => {
        return(
          <Link to={`/companies/${company.blurb}`}
                key={company.blurb}
          >
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div style={companiesStyle.container}>
                {/* <img style={companiesStyle.image} src={require('../assets/feed.jpg')} /> */}
                <Image cloudName="asgard" publicId={company.image} style={companiesStyle.image}  />
                <div style={companiesStyle.content}>
                  <h2 style={companiesStyle.title}>{company.name}</h2>
                  <p style={companiesStyle.description}>{company.description}</p>
                  <button style={companiesStyle.button}>{company.industry}</button>
                </div>
              </div>
            </div>
          </Link>
        )
     })

     return <div>{coy}</div>
    } else {
      return <div>...Loading</div>
    }
    
  }
}



const mapStateToProps = state => ({
  companies: state.items,
  hasErrored: state.hasErrored,
  isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => {
  return {
  fetchData: (url) => dispatch(fetchData(url))
}
}


export default connect(mapStateToProps, mapDispatchToProps) (Companies);

