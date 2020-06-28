import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';
import CreateService from './pages/CreateService';
import Dashboard from './pages/Dashboard';
import Logon from './pages/Logon';
import Edit from './pages/Edit';


const Routes = () => {
    return (    
        <BrowserRouter>
            <Route exact  path="/" component={Home} />
            <Route  path="/create-service" component={CreateService} />
            <Route  path="/users/:id" component={Dashboard} />
            <Route  path="/logon" component={Logon} />
            <Route  path="/edit/:id" component={Edit} />
        </BrowserRouter>
    )   
};


export default Routes;


