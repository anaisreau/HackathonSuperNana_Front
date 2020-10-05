import React, { Suspense } from 'react';
import './App.css';
import RouterApp from './Router'


const App = () => (
  
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        < RouterApp />
     </Suspense>
    </div>
   
)

export default App;
