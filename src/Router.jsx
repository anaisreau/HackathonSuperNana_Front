import React, { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const HomePage = lazy (() => import('./components/HomePage'))
const ResponsiveContainer = lazy (() => import('./components/Burger'))
const SearchDestination = lazy(()=> import ('./components/SearchDestination'))
const ResultTreatment = lazy(() => import('./components/ResultTreatment'))
const ResultDestination = lazy(() => import('./components/ResultDestination')) 
const TreatmentChoice = lazy(() => import('./components/TreatmentChoice')) 
const Blog = lazy(() => import('./components/Blog'))

function RouterApp() {
   
    return (
        <div>
            
          <ResponsiveContainer>
                
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/searchtreatment' component={TreatmentChoice} />
                <Route path='/searchdestination' component={SearchDestination} />
                <Route path='/resulttreatment' component={ResultTreatment} />
                <Route path='/resultdestination' component={ResultDestination} />
                <Route path='/blog' component={Blog} />
            </Switch>
            
         </ResponsiveContainer>
        

         
          </div>
    )
}

export default RouterApp
