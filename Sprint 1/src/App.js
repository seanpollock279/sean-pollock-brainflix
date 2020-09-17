import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Info from './Components/Info/info';
import Description from './Components/Description/Description';
import VideoGallery from './Components/Video Gallery/VideoGallery';
import Comments from './Components/Comments/Comments';
import CommForm from './Components/CommForm/commForm';
import MediaPlayer from './Components/MediaPlayer/MediaPlayer';

function App() {
  return (
    <div className="App">
      <Header />
      <MediaPlayer />
      <Info />
      <Description />

      <CommForm />
      <Comments />
      <VideoGallery />
    </div>
  );
}

export default App;
