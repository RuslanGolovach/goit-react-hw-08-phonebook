import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';

import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

const App = () => (
  <Container>
    <AppBar />
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/register" component={RegisterView} />
      <Route path="/login" component={LoginView} />
      <Route path="/contacts" component={ContactsView} />
    </Switch>
  </Container>
);

export default App;
