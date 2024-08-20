import {create} from 'zustand';
import {IAlbum, IAlbumInfo, IArtist} from '../types/interfaces';

export interface IAppStore {
  albums: IAlbum[];
  loading: boolean;
  artistInfo: IArtist | null;
  albumInfo: IAlbumInfo | null;
  artist: string;
  albumName: string;
}

export const useAppStore = create<IAppStore>(() => ({
  albums: [],
  loading: false,
  artistInfo: null,
  artist: '',
  albumName: '',
  albumInfo: null,
}));
