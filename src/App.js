import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { Fade } from "react-awesome-reveal";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MenuScreen from "./screens/MenuScreen";
import SignupScreen from "./screens/SignupScreen";
import ContactScreen from "./screens/ContactScreen";
import FooterSecondary from "./FooterSecondary";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header menuPage/>
            <HomeScreen />
            <Fade>
            <FooterSecondary alignItems="center" flexDirection="column" />
            </Fade>
          </Route>

          <Route exact path="/account/signin">
            {user ? <Redirect to="/menu" /> : <LoginScreen />}
            
          </Route>

          <Route exact path="/account/create">
            {user ? <Redirect to="/menu" /> : <SignupScreen />}
          </Route>

          <Route exact path="/menu">
            {!user ? (
              <Redirect to="/account/signin" />
            ) : (
              <>
                <Header menuPage/>
                <MenuScreen />
                <Fade>
                <FooterSecondary alignItems="center" flexDirection="column" />
                </Fade>
              </>
            )}
          </Route>

          <Route exact path="/report">
            {!user ? (
              <Redirect to="/account/signin" />
            ) : (
              <>
                <ContactScreen />
              </>
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;