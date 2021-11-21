import './App.css';
import React from "react";
import LandingPage from './pages/LandingPage';
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import Posts from './pages/Posts';
import PostDetail from "./pages/PostDetail";
import ErrorPage from './pages/ErrorPage';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

export default function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <PublicRoute path="/login" component={LoginPage} />
            <Route path="/posts" exact component={Posts} />
            <PrivateRoute path="/posts/:id" component={PostDetail} />
            <Route path="*" component={ErrorPage}/>
        </Switch>
      </div>
    </Router>
  );
}

