import React from "react";
import {Route, Switch} from "react-router";

import {Layout} from "@/layouts/Layout";
import {ROUTES} from "@/constants";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Apps from "@/pages/Apps";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={ROUTES.LOGIN} component={Login} />
      <Layout>
        <Route path={ROUTES.HOME} component={Home} exact={true} />
        <Route path={ROUTES.APPS} component={Apps} />
      </Layout>
    </Switch>
  );
}