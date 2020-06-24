import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import ResponsiveContainer from './components/Burger'
import SearchTraitement from './components/SearchTraitment'
import SearchDestination from './components/SearchDestination'
import ResultTraitment from './components/ResultTraitment'
import ResultDestination from './components/ResultDestination'


function Router() {
   
    return (
        <div>
            
          <ResponsiveContainer>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/searchTraitment' component={SearchTraitement} />
                <Route path='/searchDestination' component={SearchDestination} />
                <Route path='/resultTraitment' component={ResultTraitment} />
                <Route path='/resultDestination' component={ResultDestination} />
            </Switch>
         </ResponsiveContainer>
         
          </div>
    )
}

export default Router
