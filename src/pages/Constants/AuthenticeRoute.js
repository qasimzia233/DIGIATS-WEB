import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route ,Redirect} from 'react-router-dom'

export default function AuthenticatedRoute({component: Component,path, user, ...rest}) {
      console.log('render auth');
      console.log(user);
    return (
      <Route
        {...rest}
        render={(props) => user === true
            ? <Component {...props} {...rest} />
            : <Redirect to='/'  />} />
    )
  }