import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import Uploader from '../Uploader/Uploader';

function Router (props) {
    return(
        <Switch>
          <Route exact path="/" render={() => <Home homeProps={props.state}/>} />
          <Route path="/video/:videoId" render={() => <Home homeProps={props.state} props={props} />} />
          <Route path="/uploader" render={() => <Uploader addVideo={props.addVideo} newVideo={props.state.newVideo} onChange={props.onChange} />} />
        </Switch>
    )
}

export default Router;