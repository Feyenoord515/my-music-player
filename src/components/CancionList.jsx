import React from 'react';
import { List } from 'antd';

function CancionList({ canciones, renderSong }) {
  return (
    <List
      dataSource={canciones}
      renderItem={(song) => renderSong(song)}
    />
  );
}

export default CancionList;
