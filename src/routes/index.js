import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from '~/pages/Home';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Route
      render={({ location, match }) => {
        return (
          <TransitionGroup component={null}>
            <CSSTransition
              in={match != null}
              timeout={450}
              classNames="page"
              key={location.key}
              unmountOnExit
            >
              <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={Dashboard} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        );
      }}
    />
  );
}
