import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Assignment from './pages/Assignment'
import Intro from './pages/Intro'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/intro" />
        <Route path="/intro" exact component={Intro} />
        <Route path="/assignment" exact component={Assignment} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
