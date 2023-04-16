import { Buffer } from 'buffer';

const getClientToken = async () => {
    const client_id = 'd1473bdd8e064abfa78dc300d8b4247c';
    const client_secret = '854928ceff2b4fecaedc0148344f93dc';
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    });
  
    const data = await response.json();
    const access_token = data.access_token;
    return access_token;
  }

  
  const SpotifyAPI = {
    searchByArtist: async (artistName) => {
      const access_token = await getClientToken();
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist&limit=10`, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      });
      const data = await response.json();
      console.log(data);
      return data.artists.items;
    },
    searchByAlbum: async (albumName) => {
      const access_token = await getClientToken();
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(albumName)}&type=album&limit=10`, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      });
      const data = await response.json();
      return data.albums.items;
    },
    searchByPlaylist: async (playlistName) => {
      const access_token = await getClientToken();
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(playlistName)}&type=playlist&limit=10`, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      });
      const data = await response.json();
      return data.playlists.items;
    },
    searchArtistTopTracks: async (artistId) => {
      const access_token = await getClientToken();
      const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      });
      const data = await response.json();
      console.log(data.tracks);
      return data.tracks;
    },
    
    searchByGenre: async (genreName) => {
      const access_token = await getClientToken();
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(genreName)}&type=genre&limit=10`, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      });
      const data = await response.json();
      console.log(data.genres);
      return data.genres;
    }
  };
  
  export default SpotifyAPI;
  