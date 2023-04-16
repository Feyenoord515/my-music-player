import React, { useState, useCallback } from 'react';
import { Input, List, Card, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import SpotifyAPI from './SpotifyAPI';

import ArtistaBiblioteca from './ArtistaBiblioteca';

const { Option } = Select;

function Biblioteca() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchOption, setSearchOption] = useState('artist');
  const [queue, setQueue] = useState([]);

  // Utilizar useCallback para crear la función handleSearch y evitar que se cree en cada render
  const handleSearch = useCallback(async (value) => {
    setSearchTerm(value);
    if (value) {
      let searchResults;
      switch (searchOption) {
        case 'artist':
          searchResults = await SpotifyAPI.searchByArtist(value);
          break;
        case 'album':
          searchResults = await SpotifyAPI.searchByAlbum(value);
          break;
        case 'playlist':
          searchResults = await SpotifyAPI.searchByPlaylist(value);
          break;
        case 'genre':
          searchResults = await SpotifyAPI.searchByGenre(value);
          break;
        default:
          searchResults = [];
      }
      setSearchResults(searchResults);
    } else {
      setSearchResults([]);
    }
  }, [searchOption]);

  const handleSearchOptionChange = (value) => {
    setSearchOption(value);
  };

  const handleAddToQueue = useCallback((song) => {
    setQueue(queue => [...queue, { id: song.id }]);
  }, []);
  

  const handleRemoveFromQueue = useCallback((index) => {
    setQueue(queue => {
      const newQueue = [...queue];
      newQueue.splice(index, 1);
      return newQueue;
    });
  }, []);
  console.log(searchResults);

  return (
    <div className="flex flex-col items-center justify-center py-8 bg-celadon">
      <Input.Search
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Buscar en Spotify"
        allowClear
        prefix={<SearchOutlined className="text-white" />}
        className="w-80 bg-transparent border-2 border-white rounded-full px-4 py-2 focus:outline-none focus:shadow-outline"
      />
      <div className="mt-4">
        <Select defaultValue="artist" onChange={handleSearchOptionChange} className="bg-green-800 text-white px-2 py-1 rounded-full focus:outline-none focus:shadow-outline">
          <Option value="artist">Artista</Option>
          <Option value="album">Álbum</Option>
          <Option value="playlist">Playlist</Option>
          <Option value="genre">Género</Option>
        </Select>
      </div>
      <div className="mt-8 w-full max-w-5xl">

<div className="mt-8 w-full max-w-5xl">
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5,
            xxl: 6,
          }}
          dataSource={searchResults}
          renderItem={(item) => (
            <List.Item>
              <Card
                hoverable
                cover={
                  <img
                  alt="example"
                  src={item.images?.[0]?.url || 'https://via.placeholder.com/300'}
                  />
                }
                className="bg-gray-900 text-white"
                >

                <Card.Meta title={item.name} />
                <button onClick={() => handleAddToQueue((song) => handleAddToQueue(song))} className="px-2 py-1 rounded-full bg-green-500 text-white focus:outline-none focus:shadow-outline">Añadir a la cola</button>
</Card>
</List.Item>
)}
/>
</div>
{searchResults.map((result, index) => (
<ArtistaBiblioteca key={index} artistId={result.id} />
))}

</div>
</div>
);
}

export default Biblioteca;