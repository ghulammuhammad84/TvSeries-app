import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import User from './components/User';


const Routing = () => {
    return (
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element= {<About/>}/>
            
         
          <Route path="/users" element= {<User/>}>
            
          </Route>
          <Route path="/"element= {<Home/>}/>
        
        </Routes>
      </div>
    </Router>
    )
}

export default Routing
