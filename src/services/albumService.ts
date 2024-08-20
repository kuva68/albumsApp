import {useAppStore} from '../store/appStore';
import {apiService} from './API';

export const getTopAlbums = async (artist: string = 'cher') => {
  try {
    useAppStore.setState({loading: true});
    const res = await apiService.getTopAlbums(artist);
    useAppStore.setState({
      albums: res.data.topalbums.album.filter(el => el.name !== '(null)'),
      loading: false,
    });
  } catch (e) {
    useAppStore.setState({loading: false});
  }
};
export const getArtistInfo = async (artist: string) => {
  try {
    useAppStore.setState({loading: true});
    const res = await apiService.getArtistInfo(artist);
    useAppStore.setState({
      artistInfo: res.data.artist,
      loading: false,
    });
  } catch (e) {
    useAppStore.setState({loading: false});
  }
};
export const getAlbumInfo = async (artist: string, album: string) => {
  try {
    useAppStore.setState({loading: true});
    const res = await apiService.getAlbumInfo(artist, album);
    useAppStore.setState({
      albumInfo: res.data.album,
      loading: false,
    });
  } catch (e) {
    useAppStore.setState({loading: false});
  }
};
