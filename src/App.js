import React from 'react';
import './assets/css/style.css';

import TheHeader from './components/layouts/TheHeader';
import TheFooter from './components/layouts/TheFooter';


function App() {
  return (
    <div>
      <TheHeader />
      <h2>Main application page</h2>
      <TheFooter />
    </div>
  );
}

export default App;
