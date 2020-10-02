import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Uploader from './Components/Uploader/Uploader';
import Home from './Components/Home/Home';

function App(props) {
  return (
    <div>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/video/:videoId" render={() => <Home />} />
        </Switch>
    </div>
  )
}
  
export default App;
