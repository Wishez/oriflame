import React, { Component } from 'react'; 
import { Route, Switch, Redirect } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';

import NotFound from './NotFound';
import MyRoute from './MyRoute';
import MainPageContainer from './../containers/MainPageContainer';

const Main = ({
}) => (
    <main className='main'>
        <Route render={({ location }) => (
            <Switch style={{opacity: 0}}
             key={location.key} 
             location={location}>
                <Route exact path='/' render={props => (
                       <MainPageContainer {...props} />
                )} />   
                <MyRoute path='/shares'
                    component={({}) => ( <section>It is second section!</section> )} />
                <MyRoute path='/possibilities'
                    component={({}) => ( <section>It is third section!</section> )} />
                <MyRoute path='/registration'
                    component={({}) => ( <section>It is fourth section!</section> )} />   
                <MyRoute path='/video'
                    component={({}) => ( <section>It is fifth section!</section> )} /> 
                <Route render={() => (
                    <Redirect to="/not_found" />
                )}  />
                <MyRoute path='/not_found'
                    component={NotFound} />
            </Switch>
        )} />
    </main>
);

export default Main;
