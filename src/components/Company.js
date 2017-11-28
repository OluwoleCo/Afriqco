import React from 'react';

const Company = () => {

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
        fontWeight: 'bold'
      },
      description:{
        fontSize: 19,
        color: '#95a5a6',
        fontWeight: 'bold'
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
        color: 'red',
        // marginTop: 100
      },
      boxTitle: {
        fontSize: '16px',
        margin: '2em 0 0 0',
        height: '26%'
      },
      boxDetails: {
        fontSize: '2.7em',
        fontWeight: 600,
        margin: 0,
        color: '#3B393D',

      }
    }

  return (
    <div>
     <div className="col-md-12 col-lg-12 col-sm-12">
       <img style={companyStyle.image} src={require('../assets/feed.jpg')} />
       <h1 style={companyStyle.title}>Read By Name</h1>
       <p style={companyStyle.description}>Description</p>
     </div>

      <div style={companyStyle.contBox}>
        <div className="row">
          <div style={companyStyle.card} className="col-sm-6 col-md-6 col-lg-6">
            <p style={companyStyle.boxTitle}>Country</p>
            <p style={companyStyle.boxDetails}>Nigeria</p>
          </div>

          <div style={companyStyle.card} className="col-sm-6 col-md-6 col-lg-6">
            <p>Country</p>
            <p>Nigeria</p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Company;

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