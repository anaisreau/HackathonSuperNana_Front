import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import ResponsiveContainer from './components/Burger'
import SearchDestination from './components/SearchDestination'
import ResultTreatment from './components/ResultTreatment'
import ResultDestination from './components/ResultDestination'
import TreatmentChoice from './components/TreatmentChoice';
import Blog from './components/Blog'


function Router() {
   
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

export default Router
