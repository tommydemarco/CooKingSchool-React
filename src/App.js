import React from 'react';
import './assets/css/style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
        <Router>
          <TheHeader />
          <div className="content">
            <TheSideNav />
            <Switch>
              <Route exact path="/">
                <SingleCourse />
              </Route>
              <Route exact path="/courses">
                <TheCourses />
              </Route>
              <Route exact path="/testimonials">
                <Testimonials />
              </Route>
              <Route exact path="/contacts">
                <ContactUs />
              </Route>
            </Switch>
          </div>
          <TheFooter />
        </Router>
      </div>
    </div>
  );
}

export default App;
