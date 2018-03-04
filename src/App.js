import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom'

import Companies from './components/Companies'
import Nav from './components/Nav'
import Company from './components/Company'
import AddCompany from './components/AddCompany'

let appStyle = {
  container: {
    marginTop: 15,
  }
}

const App = () => (
    
  <div  >
  <Nav />
    <div style={appStyle.container} className="container">
      <div className="row">
        <Switch>
          <Route exact path='/' component={Companies} />
          <Route path='/companies/:id' component={Company} />
          <Route path='/addcompanies' component={AddCompany} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    </div>
  </div>
)

export default App;