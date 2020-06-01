import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainLayout from '../components/layout/MainLayout';
import Login from './login/Login';
import WorkBench from './workBench';
import ArticleManage from './articleManage';

function Main() {
    return (
        <Router>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <MainLayout>
                <Route path="/workBench" exact component={WorkBench} />
                <Route path="/articleManage" exact component={ArticleManage} />
            </MainLayout>
        </Router>
    )
}
export default Main