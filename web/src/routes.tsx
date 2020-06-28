import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';
import CreateService from './pages/CreateService';
<<<<<<< HEAD
import Dashboard from './pages/Dashboard';
import Logon from './pages/Logon';
import Edit from './pages/Edit';
=======
>>>>>>> 19bfc48d40c61414300bdedd1c3789b94c08fd2d


const Routes = () => {
    return (    
        <BrowserRouter>
            <Route exact  path="/" component={Home} />
            <Route  path="/create-service" component={CreateService} />
<<<<<<< HEAD
            <Route  path="/users/:id" component={Dashboard} />
            <Route  path="/logon" component={Logon} />
            <Route  path="/edit/:id" component={Edit} />
=======
>>>>>>> 19bfc48d40c61414300bdedd1c3789b94c08fd2d
        </BrowserRouter>
    )   
};


<<<<<<< HEAD
export default Routes;
=======
export default Routes;
>>>>>>> 19bfc48d40c61414300bdedd1c3789b94c08fd2d
