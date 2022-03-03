import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HeaderNav from './components/header/nav/HeaderNav';
import Home from './pages/home/Home';
import Top from './pages/top/Top';

function App() {
  return (
      <Router>
         <div>
            <HeaderNav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/top" element={<Top />} />
            </Routes>
         </div>
       </Router>
  );
}

export default App;
