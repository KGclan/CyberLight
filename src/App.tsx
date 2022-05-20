import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/footer/Footer';

import HeaderNav from './components/header/nav/HeaderNav';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Team from './pages/team/Team';
import Top from './pages/top/Top';

function App() {

  return (
      <Router>
         <div>
            <HeaderNav />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/game/:slug' element={<Top />} />
              <Route path='/profile/:id' element={<Profile />} />
              <Route path='/team/:id' element={<Team />} />
            </Routes>
            <Footer />
         </div>
       </Router>
  );
}

export default App;