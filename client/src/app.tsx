import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import User from './contexts/User';

import './index.css';

const App = () => {
  return (
    <div className="app">
      <User.Provider>
        <Router>
          <Header />

          <Switch>
            <Route path="/register">
              <Register />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/" exact>
              <Home />
            </Route>

            <Route>
              404
            </Route>
          </Switch>
          
          <Footer />
        </Router>
      </User.Provider>
    </div>
  );
};

export default App;