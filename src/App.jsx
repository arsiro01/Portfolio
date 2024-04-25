import React, { useRef, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Hero,
} from "./components";
import finalAnimVideo from "./assets/videoplayback.webm"; // Import the video file

const App = () => {
  // Create a ref to the video element
  const videoRef = useRef(null);

  // Set the playback speed when the component mounts
  useEffect(() => {
    if (videoRef.current) {
      // Set the playback rate to 0.5 for half-speed playback
      videoRef.current.playbackRate = 0.75;
    }
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="w-screen h-screen relative">
          {/* Add the ref to the video element */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            controlsList="nodownload"
            ref={videoRef} // Ref added here
          >
            <source src={finalAnimVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <Hero />
          </div>
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
