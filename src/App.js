import './App.css';
import React from 'react';
import Timeline from './timeline-components/Timeline'
import Sidebar from './info-components/Sidebar';

function App() {
  return (
    <div className="App">
      <Timeline />
      <Sidebar />
    </div>
  );
}

export default App;
