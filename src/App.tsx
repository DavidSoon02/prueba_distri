import React from 'react';
import MarioCharacters from './components/AmiiboList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Super Mario API </h1>
      <MarioCharacters />
    </div>
  );
};

export default App;
