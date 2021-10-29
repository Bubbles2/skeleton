import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import TestSnippets from './components/TestSnippets'
import { createBrowserHistory } from "history";
export const history = createBrowserHistory()

const AppRouter = (props) => (
<Router history={history}>
        <div>
            <Switch>
               <Route path="/" component={TestSnippets} exact={true}/>
               </Switch>
        </div>
</Router>
);
export default AppRouter;