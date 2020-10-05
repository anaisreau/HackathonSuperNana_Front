import React, { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const HomePage = lazy (() => import('./components/HomePage'))
const ResponsiveContainer = lazy (() => import('./components/Burger'))
const SearchDestination = lazy(()=> import ('./components/SearchDestination'))
const ResultTreatment = lazy(() => import('./components/ResultTreatment'))
const ResultDestination = lazy(() => import('./components/ResultDestination')) 
const TreatmentChoice = lazy(() => import('./components/TreatmentChoice')) 
const Blog = lazy(() => import('./components/Blog'))
const Login = lazy(() => import ('./components/Login'))
const Register = lazy(() => import ('./components/Register'))
const Profile = lazy (() => import ('./components/Profile'))

function RouterApp() {
   
    return (
        <div>
            
          <ResponsiveContainer>
                
            <Switch>
                <Route exact path='/home' component={HomePage} />
                <Route path='/searchtreatment' component={TreatmentChoice} />
                <Route path='/searchdestination' component={SearchDestination} />
                <Route path='/resulttreatment' component={ResultTreatment} />
                <Route path='/resultdestination' component={ResultDestination} />
                <Route path='/blog' component={Blog} />
                <Route exact path="/users/register" component={Register} />
                <Route exact path="/users/login" component={Login} />
                <Route exact path="/users/profile" component={Profile} />
            </Switch>
            
         </ResponsiveContainer>
        

         
          </div>
    )
}

export default RouterApp
