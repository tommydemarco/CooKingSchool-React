import React from 'react';
import './assets/css/style.css';

import TheHeader from './components/layouts/TheHeader';
import TheFooter from './components/layouts/TheFooter';
import TheSideNav from './components/layouts/TheSideNav';
import SingleCourse from './components/views/SingleCourse';
import ContactUs from './components/views/ContactUs';
import Testimonials from './components/views/Testimonials';
import TheCourses from './components/views/TheCourses';

function App() {
  return (
    <div className="app">
      <div className="container">
        <TheHeader />
        <div className="content">
          <TheSideNav />
          <SingleCourse />
        </div>
        <TheFooter />
      </div>
    </div>
  );
}

export default App;
