// import { faPlayCircle, faPauseCircle, faStopCircle, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// function AudioPlayer({ handlePlay, handlePause, handleStop, handleRewind, handleForward, isPlaying, audioRef }) {
//   return (
//     <div className="flex items-center justify-center space-x-4">
//       <button className="rounded-full p-2 bg-red-500 text-white hover:bg-red-600" onClick={handleRewind}>
//         <FontAwesomeIcon icon={faBackward} />
//       </button>
//       <button className="rounded-full p-4 bg-gray-200 hover:bg-gray-300" onClick={isPlaying ? handlePause : handlePlay}>
//         {isPlaying ? <FontAwesomeIcon icon={faPauseCircle} className="text-gray-600" /> : <FontAwesomeIcon icon={faPlayCircle} className="text-gray-600" />}
//       </button>
//       <button className="rounded-full p-2 bg-red-500 text-white hover:bg-red-600" onClick={handleStop}>
//         <FontAwesomeIcon icon={faStopCircle} />
//       </button>
//       <button className="rounded-full p-2 bg-red-500 text-white hover:bg-red-600" onClick={handleForward}>
//         <FontAwesomeIcon icon={faForward} />
//       </button>
//       <audio ref={audioRef} />
//     </div>
//   );
// }

// export default AudioPlayer;

import { faPlay, faPause, faStop, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AudioPlayer({ handlePlay, handlePause, handleStop, handleRewind, handleForward, isPlaying, audioRef }) {
return (
<div className="bg-green-800 p-4">
<div className="flex items-center justify-between">
<button className="rounded-md p-2 bg-aquamarine hover:bg-gray-800 text-black" onClick={handleRewind}>
<FontAwesomeIcon icon={faBackward} />
<span className="ml-1 text-black">Rewind</span>
</button>
<button className="rounded-md p-2 bg-aquamarine hover:bg-gray-800 text-black" onClick={isPlaying ? handlePause : handlePlay}>
{isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
<span className="ml-1">{isPlaying ? 'Pause' : 'Play'}</span>
</button>
<button className="rounded-md p-2 bg-aquamarine hover:bg-gray-800 text-black" onClick={handleStop}>
<FontAwesomeIcon icon={faStop} />
<span className="ml-1 text-black">Stop</span>
</button>
<button className="rounded-md p-2 bg-aquamarine hover:bg-gray-800 text-black" onClick={handleForward}>
<FontAwesomeIcon icon={faForward} />
<span className="ml-1 text-black">Forward</span>
</button>
</div>
<div className="mt-4 text-gray-700">
<span>00:00</span>
<span className="mx-2 text-gray-700">/</span>
<span>00:00</span>
</div>
<audio ref={audioRef} />
</div>
);
}

export default AudioPlayer;