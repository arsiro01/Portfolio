import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';
import finalAnimVideo from './assets/video-playback.mp4'; // Import the video file

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="w-screen h-screen">
          <video autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover" controlsList="nodownload">
            <source src={finalAnimVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
