import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../components/common/protectedRoute';
import DashboardLayout from '../layout/dashboard_layout';
import SignInPage from '../pages/sign_in';

const Routes = () => {
    return (
        <Switch>
            <Route path={'/admin'} component={DashboardLayout} />
            <Route path={'/'} component={SignInPage} />
        </Switch>
    )
}

export default Routes;