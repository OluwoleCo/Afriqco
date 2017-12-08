import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

//Component
import Companies from './components/Companies'
import Nav from './components/Nav'
import Company from './components/Company'


//redux
import { connect } from 'react-redux';
import { fetchData } from './actions/companiesAction'

const App = () => {
  
  // constructor() {
  //       super();

  //       this.renderCompanies = this.renderCompanies.bind(this)
  //       this.renderCompany   = this.renderCompany.bind(this)
        

  //       this.state = {
  //           companies: [ {
  //             name: 'Asoriba',
  //             description: 'Church App'
  //           }  ]
  //       };

  //       // this.logout = this.logout.bind(this);
  //   }


  // renderCompany(matchParams) {
  //   return <Company {...matchParams} companies={this.props.companies} />
  // }

  // renderCompanies(matchParams) {
  //   return <Companies {...matchParams} companies={this.props.companies} />
  // }

  // componentDidMount() {
  //   this.props.fetchData('http://localhost:6069/companies')
  // }

  render() {
  

    let appStyle = {
      container: {
        marginTop: 80
      }

    }
    console.log(this.props)
    return (
      <div className="App container-fluid">
        <Nav />
        <div style={appStyle.container} className="container">
          <div className="row">
            <Switch>
              <Route exact path='/' component={Companies}/>
              <Route path='/company' component={Company}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('sta', state)
    return {
        companies: state.items,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading
    };
// };

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
