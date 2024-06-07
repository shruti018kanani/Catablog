import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx'
import Home from './components/Home';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup';
import Addblog from './components/Addblog.jsx'
import UserProfile from './components/UserProfile';
import BlogDetails from './components/BlogDetails.jsx'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-purple-200">
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:blogId" element={<BlogDetails />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add-new" element={<Addblog />} />
            <Route path="/profile" element={<UserProfile />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
