import { Route, Switch } from 'wouter'
import Homepage from './pages/Homepage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import { useLocation  } from 'wouter';
import { useEffect } from 'react';

export default function App() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);
  return (<>
    <Switch>
      <Route path='/' component={Homepage} />
      <Route path='/project/:id' component={ProjectPage} />
      <Route path='/about' component={AboutPage} />
    </Switch>

  </>)
}