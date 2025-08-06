import React from 'react';
import {Route, Switch} from 'wouter'
import Homepage from './pages/Homepage';

export default function App(){
  return (<>
   <Switch>
    <Route path='/' component={Homepage}/>
   </Switch>

  </>)
}