import axios, {AxiosResponse} from 'axios';
import {baseUrl, LAST_FM_API_KEY} from '../../configs/appConfig';
import {
  IAlbumInfoResponse,
  IAlbums,
  IArtistInfoResponse,
} from '../types/interfaces';

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'no-cors',
  },
});
export const apiService = {
  getTopAlbums: async (artist: string): Promise<AxiosResponse<IAlbums, any>> =>
    await instance.get(
      `?method=artist.gettopalbums&artist=${artist}&api_key=${LAST_FM_API_KEY}&format=json`,
    ),
  getArtistInfo: async (
    artist: string,
  ): Promise<AxiosResponse<IArtistInfoResponse, any>> =>
    await instance.get(
      `?method=artist.getinfo&artist=${artist}&api_key=${LAST_FM_API_KEY}&format=json`,
    ),
  getAlbumInfo: async (
    artist: string,
    album: string,
  ): Promise<AxiosResponse<IAlbumInfoResponse, any>> =>
    await instance.get(
      `?method=album.getinfo&artist=${artist}&album=${album}&api_key=${LAST_FM_API_KEY}&format=json`,
    ),
};
