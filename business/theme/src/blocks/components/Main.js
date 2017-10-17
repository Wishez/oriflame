import React, { Component } from 'react'; 
import { Route, Switch, Redirect } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';

import NotFound from './NotFound';
import MyRoute from './MyRoute';
import MainPageContainer from './../containers/MainPageContainer';
import RegistrationContainer from './../containers/RegistrationContainer';
import SharesContainer from './../containers/SharesContainer';
import SingleShareContainer from './../containers/SingleShareContainer';

const Main = ({
}) => (
    <Route render={({ location }) => (
        <Switch style={{opacity: 0}}
         key={location.key} 
         location={location}>
            <Route exact path='/' render={props => (
                   <MainPageContainer {...props} />
            )} />   
            <MyRoute path='/shares'
                component={SharesContainer} />
            <MyRoute path='/shares/:shareId'
                component={SingleShareContainer} />
            <MyRoute path='/possibilities'
                component={({}) => ( <section>It is third section!</section> )} />
            <MyRoute path='/registration'
                component={RegistrationContainer} />   
            <MyRoute path='/video'
                component={({}) => ( <section>It is fifth section!</section> )} /> 
            <Route render={() => (
                <Redirect to="/not_found" />
            )}  />
            <MyRoute path='/not_found'
                component={NotFound} />
        </Switch>
    )} />
);

export default Main;
