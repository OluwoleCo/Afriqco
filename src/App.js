import React from 'react';
import { Helmet } from 'react-helmet';

import { Switch, Route, Redirect } from 'react-router-dom'

import Companies from './components/Companies'
import Nav from './components/Nav'
import Company from './components/Company'
import AddCompany from './components/AddCompany'

import afriqco from './static-asset/Afriq.png'


let appStyle = {
  container: {
    marginTop: 15,
  }
}

const App = () => (
  <div>
    <Nav />
    <div style={appStyle.container} className="container">
      <Helmet>
        <title>Afriqco - A snapshot of Africa's most promising startups</title>
        <meta name="theme-color" content="#805FCA" />
        <meta name="twitter:title" content="Afriqco" />
        <meta
          name="twitter:description"
          content="A snapshot of Africa's most promising startups"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@OluwoleCo" />
        <meta name="twitter:creator" content="@OluwoleCo" />
        <meta
          name="twitter:image"
          content={`https://afriq.co${afriqco}`}/>
      </Helmet>
      <div className="row">
        <Switch>
          <Route exact path="/" component={Companies} />
          <Route path="/companies/:id" component={Company} />
          <Route path="/addcompanies" component={AddCompany} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;