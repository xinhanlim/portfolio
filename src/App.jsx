import {Route, Switch} from 'wouter'
import Homepage from './pages/Homepage';
import ProjectPage from './pages/ProjectPage';

export default function App(){
  return (<>
   <Switch>
    <Route path='/' component={Homepage}/>
    <Route path='/project/:id' component={ProjectPage}/>
   </Switch>

  </>)
}