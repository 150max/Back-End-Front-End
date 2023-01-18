import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import homepage from './views/homepage';
import home from './views/home';
import login from './views/login';
import alertas from './views/alertas';
import ajuda from './views/ajuda';
import dashboards from './views/dashboards';



function App() {
  return (
    <Router>
    <Route exact path="/"><Redirect to="/homepage" /></Route>
    <Route path="/homepage" component={homepage} />
    <Route path="/home" component={home} />
    <Route path="/login" component={login} />
    <Route path="/alertas" component={alertas}/>
    <Route path="/ajuda" component={ajuda}/>
    <Route path="/dashboards" component={dashboards}/>
    </Router>
    );
}

export default App;