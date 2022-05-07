import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import ManagementLoginPage from "./components/ManagementLoginPage";
import MemberLoginPage from "./components/MemberLoginPage";
import PrivateRoute from "./components/PrivateRoute";
import Services from "./components/Services";
import TeamPage from "./components/TeamPage";
import UserSignUpPage from "./components/UserSignUpPage";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login_member">
              <MemberLoginPage />
            </Route>

            <Route path="/login_management">
              <ManagementLoginPage />
            </Route>

            <Route path="/about-us">
              <AboutUs />
            </Route>

            <Route path="/services">
              <Services />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
            <PrivateRoute path="/landing">
              <LandingPage />
            </PrivateRoute>
            <PrivateRoute path="/teams">
              <TeamPage />
            </PrivateRoute>
            <PrivateRoute path="/messages">
              <LandingPage />
            </PrivateRoute>
            <Route path="/forgot_password">
              <ForgotPasswordPage />
            </Route>
            <Route path="/user_sign_up">
              <UserSignUpPage />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
