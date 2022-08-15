import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './pages/Login/AuthProvider/AuthProvider';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';
// import OurCollection from './pages/Home/OurCollection/OurCollection';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
// import Oder from './pages/Home/Oder/Oder';
import NotFound from './pages/NotFound/NotFound';
// import SingleProduct from './pages/Home/SingleProduct/SingleProduct';
import Products from './pages/Home/Products/Products';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/products">
              <Products/>
            </PrivateRoute>
            {/* <PrivateRoute exact path="/product/:_id">
          <SingleProduct></SingleProduct>
            </PrivateRoute> */}
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
