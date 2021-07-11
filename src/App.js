import './App.css';
import React, { useState } from 'react';
import Timeline from './timeline-components/Timeline'
import Sidebar from './info-components/Sidebar';

function App() {
  const [chosenUrl, setChosenUrl] = useState('');
  const [overthrown, setOverthrown] = useState(false);
  return (
    <div className="App">
      <Timeline setChosenUrl={setChosenUrl} overthrown={overthrown} />
      <Sidebar chosenUrl={chosenUrl} overthrown={overthrown} setOverthrown={setOverthrown}/>
    </div>
  );
}

export default App;
