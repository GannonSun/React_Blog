import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainLayout from '../components/MainLayout';
import Index from './index';
import List from './list';
import Detailed from './detailed';

function Main() {
    return (
        <Router>
            <Route path="/home" exact component={Index} />
            <Route path="/list?id" exact component={List} />
            <Route path="/detailed" exact component={Detailed} />
        </Router>
    )
}
export default Main;