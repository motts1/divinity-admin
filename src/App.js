import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";

import Home from "./containers/Home";
import Setting from "./containers/Setting";
 

import MainLayout from "./layouts/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout";
import Orders from "./components/Admin/Orders";
import AdminLogin from './containers/AdminLogin'

const NotFound = () => {
  return <div>NotFound</div>;
};

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const EmptyRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <EmptyLayout>
          <Component {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
};

class App extends Component {

  async componentDidMount(){
    Amplify.configure({ 
      API: {
        endpoints: [
          {
            name: "orders",
            endpoint: "https://xd7hst7me0.execute-api.us-east-1.amazonaws.com/prod/orders",
            region: "us-east-1"
          }
        ]
      }
    })
                          function loadOrders(){
                            return API.get("orders", "/orders")
                          }
  }
  render() {
    const { settings } = this.props;
  

    return (
      <MuiThemeProvider theme={settings.theme}>
     
        <CssBaseline />
        <div style={{ height: "100vh" }}>
          <Router>
            <Switch>
              <DashboardRoute path="/dashboard" component={Home} />
              <DashboardRoute exact path="/" component={Home} />
              <DashboardRoute path="/setting" component={Setting} />
              <DashboardRoute path="/orders" component={Orders} />
              <DashboardRoute exact path="/admin" component={AdminLogin} />
              <EmptyRoute component={NotFound} />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    settings: state.settings,
  };
};

export default connect(
  mapStateToProps,
)(App);
