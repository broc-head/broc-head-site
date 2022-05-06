export type Song = {
  songUrl: string;
  title: string;
  artist: string;
};
  
export type NowPlayingSong = {
  isPlaying: boolean;
  songUrl: string;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
};

export type LastPlayedSong = {
  songUrl: string;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
};
  
export type TopTracks = {
  tracks: Song[];
};