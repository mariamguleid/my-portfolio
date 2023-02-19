import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ user }) => {
  return (
    <Router>
      <Routes>
        
        <Route exact path="/mariamgul1.github.io" element={<Me user={user} />} />
        <Route path="/projects/mariamgul1.github.io" element={<Projects user={user} />} />
        <Route path="/work/mariamgul1.github.io" element={<Work user={user} />} />
        <Route path="/education/mariamgul1.github.io" element={<Education user={user} />} />
      </Routes>
    </Router>
  );
};

export default Pages;