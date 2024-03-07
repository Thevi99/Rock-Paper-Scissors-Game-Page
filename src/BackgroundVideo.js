// BackgroundVideo.js

import React from 'react';

const BackgroundVideo = ({ videoSource }) => {
  return (
    <div className="video-background">
      <video autoPlay="autoplay" loop="loop" muted playsInline className="video">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
