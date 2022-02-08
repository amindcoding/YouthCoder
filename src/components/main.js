import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './tutor';
import Contact from './contact';
import Articels from './articels';
import Forum from './forum';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/tutor" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/articels" component={Articels} />
    <Route path="/forum" component={Forum} />
  </Switch>
)

export default Main;
