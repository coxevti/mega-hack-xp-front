import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from '~/pages/Home';
import Dashboard from '~/pages/Dashboard';
import Dynamic from '~/pages/Dynamic';
import Question from '~/pages/Question';

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
                <Route path="/dashboard/dynamic" exact component={Dynamic} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/question" component={Question} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        );
      }}
    />
  );
}
