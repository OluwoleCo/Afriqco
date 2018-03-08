import React, {Component} from 'react';

// Redux
import { connect } from 'react-redux';
import { fetchData } from '../actions/companiesAction'
import { Image } from 'cloudinary-react';


class Company extends Component {

  componentDidMount() {

    let url = 'https://afriqco.herokuapp.com/companies'
    this.props.fetchData(url)
  }
  
  render() {

    let asset = '../assets'

    let companyStyle = {
      image: {
        height: 200,
        width: 200,
          marginTop: 20
        },
        title: {
          fontSize: 25,
          // color: '#2c3e50',
          color: '#3b393d',
          // fontWeight: 'bold'
        },
        description:{
          fontSize: 19,
          color: '#95a5a6',
          // fontWeight: 'bold'
        },
        card: {
          height: 210,
          border: '1px solid rgb(236, 240, 241)',
          backgroundColor: '#fff',
          width: '45%',
          position: 'relative',
          float: 'left',
          textAlign: 'center',
          display: 'block',
          margin: '2%',
          borderRadius: 3
        },
        contBox: {
          width: '70%',
          margin: '0 auto',
          // boxShadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
          transition: 'box - shadow .3s',
          // marginTop: 100
        },

        contBoxAfter: {
          boxShadow: '0 0 11px rgba(33,33,33,.2)'
        },

        onHover: (hover) => {
         return hover ? this.contBoxAfter : this.contBox
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
      const getCompany = (blurbb) => {
        const isCompany = p => p.blurb === blurbb
        return company.find(isCompany)
      }


      let coy = getCompany(params)
      return (
        <div>
          
          <div className="col-md-12 col-lg-12 col-sm-12">
            <div style={{textAlign: 'center'}}>
            <Image cloudName="asgard" publicId={coy.image} style={companyStyle.image} />
            <h1 style={companyStyle.title}>{coy.name}</h1>
            <p style={companyStyle.description}>{coy.description}</p>
            </div>
          </div>
          <div style={companyStyle.contBox}>
            <div className="row">
              <div style={companyStyle.card} className="col-sm-12 col-md-6 col-lg-6">
                <p style={companyStyle.boxTitle}>Founding Date</p>
                <p style={companyStyle.boxDetails}>{coy.founded}</p>
              </div>

              <div style={companyStyle.card} className="col-sm-12 col-md-6 col-lg-6">
                <p style={companyStyle.boxTitle}>Country</p>
                <p style={companyStyle.boxDetails}>{coy.country}</p>
              </div>

              <div style={companyStyle.card} className="col-sm-12 col-md-6 col-lg-6">
                <p style={companyStyle.boxTitle}>Industry</p>
                <p style={companyStyle.boxDetails}>{coy.industry}</p>
              </div>

              <div style={companyStyle.card} className="col-sm-12 col-md-6 col-lg-6">
                <p style={companyStyle.boxTitle}>Funding Status</p>
                <p style={companyStyle.boxDetails}>{coy.funding}</p>
              </div>

              <div style={companyStyle.card} className="col-sm-12 col-md-6 col-lg-6">
                <p style={companyStyle.boxTitle}>Number of Employees</p>
                <p style={companyStyle.boxDetails}>{coy.employees}</p>
              </div>

              <div style={companyStyle.card} className="col-sm-12 col-md-6 col-lg-6">
                <p style={companyStyle.boxTitle}>CEO</p>
                <p style={companyStyle.boxDetails}>{coy.ceo}</p>
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