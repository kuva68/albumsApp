export interface IArtistRespCount {
  artist: string;
  page: number;
  perPage: number;
  totalPages: number;
  total: number;
}

export interface IAlbumImage {
  '#text': string;
  size: 'small' | 'medium' | 'large' | 'extralarge';
}
export interface IArtistTag {
  name: string;
  url: string;
}
export interface IArtist {
  name: string;
  mbid: string;
  url: string;
  image?: IAlbumImage[];
  streamable?: number;
  ontour?: number;
  stats?: {
    listeners: number;
    playcount: number;
  };
  similar?: {artist: IArtist[]};
  tags?: {tag: IArtistTag[]};
  bio?: {
    published: string;
    summary: string;
    content: string;
    links: {
      link: {
        '#text': string;
        rel: string;
        href: string;
      };
    };
  };
}
export interface IAlbum {
  name: string;
  playcount: number;
  mbid: string;
  url: string;
  artist: IArtist;
  image: IAlbumImage[];
}

export interface IAlbums {
  topalbums: {album: IAlbum[]; '@attr': IArtistRespCount};
}

export interface IArtistInfoResponse {
  artist: IArtist;
}
export interface IViewable {
  index: number;
  isViewable: boolean;
  item: any;
  key: string;
}
export interface ITrack {
  name: string;
  duration: number;
  mbid: string;
  url: string;
  streamable: {
    '@fulltrack': '0' | '1';
    '#text': '0' | '1';
  };
  artist: IArtist;
}

export interface IAlbumInfo {
  name: string;
  artist: string;
  id: string;
  mbid: string;
  url: string;
  releasedate: string;
  image: IAlbumImage[];
  listeners: string;
  playcount: string;
  wiki: {content: string};
  toptags: {
    tag: IArtistTag[];
  };
  tracks: {
    track: ITrack[];
  };
}
export interface IAlbumInfoResponse {
  album: IAlbumInfo;
}
