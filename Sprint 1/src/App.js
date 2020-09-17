import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Info from './Components/Info/info';
import Description from './Components/Description/Description';
import VideoGallery from './Components/Video Gallery/VideoGallery';

function App() {
  return (
    <div className="App">
      <Header />

      <Info />
      <Description />

      <VideoGallery />
    </div>
  );
}

export default App;
