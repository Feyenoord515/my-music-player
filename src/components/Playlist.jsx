import React, { useState, useRef } from 'react';
import AudioPlayer from './AudioPlayer';

function Playlist({ tracks }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  function handlePlay() {
    setIsPlaying(true);
    audioRef.current.play();
  }

  function handlePause() {
    setIsPlaying(false);
    audioRef.current.pause();
  }

  function handleStop() {
    setIsPlaying(false);
    audioRef.current.pause();
    
  }

  function handleRewind() {
    setCurrentTrackIndex(currentTrackIndex => currentTrackIndex + 1);
  }

  function handleForward() {
    setCurrentTrackIndex(currentTrackIndex => currentTrackIndex + 1);
  }

  function handleEnded() {
    if (currentTrackIndex === tracks.length - 1) {
      handleStop();
    } else {
      setCurrentTrackIndex(currentTrackIndex => currentTrackIndex + 1);
    }
  }

  const currentTrack = tracks[currentTrackIndex];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Playlist</h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={index} className={index === currentTrackIndex ? 'font-bold' : ''}>
            {track.title}
          </li>
        ))}
      </ul>
      <AudioPlayer
        handlePlay={handlePlay}
        handlePause={handlePause}
        handleStop={handleStop}
        handleRewind={handleRewind}
        handleForward={handleForward}
        isPlaying={isPlaying}
        audioRef={audioRef}
        src={currentTrack.src}
        onEnded={handleEnded}
      />
    </div>
  );
}

export default Playlist;
