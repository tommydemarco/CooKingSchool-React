import React from 'react';
import './assets/css/style.css';

import TheHeader from './components/layouts/TheHeader';
import TheFooter from './components/layouts/TheFooter';
import TheSideNav from './components/layouts/TheSideNav';
import TheMaine from './components/TheMaine';


function App() {
  return (
    <div className="app">
      <div className="container">
        <TheHeader />
        <div className="content">
          <TheSideNav />
          <TheMaine />
        </div>
        <TheFooter />
      </div>
    </div>
  );
}

export default App;
