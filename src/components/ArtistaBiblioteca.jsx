import React, { useState, useEffect } from 'react';
import { Typography, List, Spin } from 'antd';
import SpotifyAPI from './SpotifyAPI';
import SongListItem from './SongListItem';

const { Title } = Typography;

function ArtistaBiblioteca({ artistId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  //  const id = artist.items.map(art=>art.id)
   console.log(artistId);
  useEffect(() => {
    async function fetchTopTracks() {
      setIsLoading(true);
      const tracks = await SpotifyAPI.searchArtistTopTracks(artistId);
      console.log(tracks);
      setSongs(tracks);
      setIsLoading(false);
    }
    fetchTopTracks();
  }, [artistId]);
console.log(songs)
  return (
    <>
      <Title level={3}>Canciones populares</Title>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <List
          dataSource={songs}
          renderItem={(song) => (
            <SongListItem
              song={song}
              currentSong={null}
              isPlaying={false}
              onPlay={() => {}}
              onPause={() => {}}
              onDelete={() => {}}
              onAddToQueue={() => {}}
            />
          )}
        />
      )}
    </>
  );
}

export default ArtistaBiblioteca;

