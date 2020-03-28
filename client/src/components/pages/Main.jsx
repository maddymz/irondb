import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import ReactDOM from 'react-dom';
import Database from '../Database';
import DataEntry from './DataEntry';
import Help from './Help';
import Home from './Home';
import Register from './Register';
import Panel from '../Panel';
import Profile from '../Profile';
import Navbar from '../Navbar';
import Error from '../Error';
import Login from './Login'
import {UserContext, UserContextProvider} from '../../userContext.js';

import Account from './Account';
import Auth from '../Auth'
import ApprovalOwnEntryError from "../ApprovalOwnEntryError";


const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        Auth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

function Main(props) {

  return (
    <Router>
        <div>

            <UserContextProvider>
              <Navbar />
              
              <Route path="/login" component={Login} />
              <Route path="/help"
                render={(props) => <Help {...props} />}
            />
            </UserContextProvider>

            <Route exact path="/" component={Home}/>
            <Route path='/register' component={Register}/>
            <ProtectedRoute path="/account" component={Account}/>

            <ProtectedRoute path="/database" component={Database}/>
            
            <ProtectedRoute path="/panel" component={Panel}/>
            <ProtectedRoute path="/data-entry" component={DataEntry}/>
            <ProtectedRoute path="/profile" component={Profile}/>
            {/* TODO: CORRECTLY ROUTE TO DATA APPROVAL ERROR PAGE */}
            <ProtectedRoute path="/data-entry-error" component={ApprovalOwnEntryError}/>
            <Route exact path="/error" component={Error}/>
            

        </div>
    </Router>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));

export default Main;