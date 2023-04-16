import React, { useRef } from 'react';
import { List, Avatar, Button, Tooltip } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';

function SongListItem({ song, currentSong, isPlaying, onPlay, onPause, onDelete, onAddToQueue }) {
  const isCurrentSong = currentSong && currentSong.id === song.id;
  const audioRef = useRef(null);
console.log(song);
  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      onPlay(song);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      onPause();
    }
  };

  return (
    <List.Item
      className="bg-gradient-to-b from-white via-gray-100 to-gray-200 backdrop-filter backdrop-blur-md bg-opacity-50 "
      actions={[
        <Tooltip title="Reproducir">
          <Button
            type="link"
            icon={isCurrentSong && isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
            onClick={() => (isCurrentSong && isPlaying ? handlePause() : handlePlay())}
          />
        </Tooltip>,
        <Tooltip title="Agregar a la cola de reproducción">
          <Button type="link" icon={<PlusCircleOutlined />} onClick={() => onAddToQueue(song)} />
        </Tooltip>,
        <Tooltip title="Eliminar">
          <Button type="link" icon={<DeleteOutlined />} onClick={() => onDelete(song)} />
        </Tooltip>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar icon={<PlayCircleOutlined />} />}
        title={<span className="text-gray-800">{song.name}</span>}
        description={song.artists.map(ar=>ar.name)}
      />
      <audio ref={audioRef} src={song.preview_url} controls></audio>
    </List.Item>
  );
}

export default SongListItem;
