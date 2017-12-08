import React, {Component} from 'react';

// Redux
import { connect } from 'react-redux';
import { fetchData } from '../actions/companiesAction'

class Company extends Component {

  componentDidMount() {

    let url = 'http://localhost:6069/companies'
    this.props.fetchData(url)
  }
  
  render() {
    console.log(this.props)
    let asset = '../assets'

    let companyStyle = {
      image: {
        height: 100,
        width: 100,
          marginTop: 20
        },
        title: {
          fontSize: 25,
          color: '#2c3e50',
          // fontWeight: 'bold'
        },
        description:{
          fontSize: 19,
          color: '#95a5a6',
          // fontWeight: 'bold'
        },
        card: {
          height: 210,
          backgroundColor: '#ecf0f1',
          width: '45%',
          position: 'relative',
          float: 'left',
          textAlign: 'center',
          display: 'block',
          margin: '2%'
        },
        contBox: {
          width: '70%',
          margin: '0 auto',
          // marginTop: 100
        },
        boxTitle: {
          fontSize: '22px',
          margin: '2em 0 0 0',
          height: '26%',
        },
  
        boxDetails: {
          fontSize: '2.7em',
          fontWeight: 600,
          margin: 0,
          color: '#3B393D',
  
        }
      }

    
    let company = this.props.companies;
    let companyOne = this.props.companies[0];
    let params = this.props.match.params.id;
    

    
    if (company && companyOne) {
      const getCompany = (name) => {
        const isCompany = p => p.name === name;
        return company.find(isCompany)
      }
      let coy = getCompany(params)
      return (
        <div>
          
          <div className="col-md-12 col-lg-12 col-sm-12">
            <div style={{textAlign: 'center'}}>
            <img style={companyStyle.image} src={require('../assets/feed.jpg')} />
            <h1 style={companyStyle.title}>{coy.name}</h1>
            <p style={companyStyle.description}>{coy.description}</p>
            </div>
          </div>
          <div style={companyStyle.contBox}>
            <div className="row">
              <div style={companyStyle.card} className="col-sm-12 col-md-6 col-lg-6">
                <p style={companyStyle.boxTitle}>Founding Date</p>
                <p style={companyStyle.boxDetails}>2013</p>
              </div>

              <div style={companyStyle.card} className="col-sm-12 col-md-6 col-lg-6">
                <p style={companyStyle.boxTitle}>Location</p>
                <p style={companyStyle.boxDetails}>Nigeria</p>
              </div>

              <div style={companyStyle.card} className="col-sm-12 col-md-6 col-lg-6">
                <p style={companyStyle.boxTitle}>Industry</p>
                <p style={companyStyle.boxDetails}>{coy.industry}</p>
              </div>

              <div style={companyStyle.card} className="col-sm-12 col-md-6 col-lg-6">
                <p style={companyStyle.boxTitle}>Funding Status</p>
                <p style={companyStyle.boxDetails}>Seed stage</p>
              </div>

              <div style={companyStyle.card} className="col-sm-12 col-md-6 col-lg-6">
                <p style={companyStyle.boxTitle}>Number of Employees</p>
                <p style={companyStyle.boxDetails}>12</p>
              </div>

              <div style={companyStyle.card} className="col-sm-12 col-md-6 col-lg-6">
                <p style={companyStyle.boxTitle}>Founders</p>
                <p style={companyStyle.boxDetails}>Brian Schowengerdt</p>
              </div>


            </div>
          </div>
        </div>
      )
    } else {
      return <div>...loading</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Company);


//  <div style={{width: '30%'}}>
//         <div className="container">
//           <div className="row">
//               <div className="col-lg-6 col-md-6">
//                 <div style={companyStyle.card}>
//                   <p>Country</p>
//                   <p>Nigeria</p>
//                 </div>
//               </div>
            
//             <div className="col-lg-6 col-md-6">
//               <div style={companyStyle.card}>
//                 <p>Country</p>
//                 <p>Nigeria</p>
//               </div>
//             </div>

//           </div>
//         </div>
//        </div>