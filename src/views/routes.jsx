import React from 'react';
import { 
    BrowserRouter as Router,
    Routes as RoutesDom,
    Route,
} from 'react-router-dom';
import Login from './Login';
import NaoEncontrada from './NaoEncontrada';


const Routes = () => {
    return (
        <Router>
            <RoutesDom>
                <Route path="/" element={<Login />} exact />
                <Route path="*" element={<NaoEncontrada />} />
            </RoutesDom>
        </Router>
    );
};

export default Routes;