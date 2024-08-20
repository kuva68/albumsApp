import React, {useEffect} from 'react';
import ProfileCard from './components/ProfileCard';
import MainLayout from '../../components/MainLayout';
import {getAlbumInfo, getArtistInfo} from '../../services/albumService';
import {useAppStore} from '../../store/appStore';

const ProfileScreen = () => {
  const {artist, albumName} = useAppStore();
  useEffect(() => {
    if (artist && albumName) {
      setTimeout(() => {
        getArtistInfo(artist);
        getAlbumInfo(artist, albumName);
      });
    }
  }, [artist, albumName]);

  return (
    <MainLayout isBackBtn title="Artist">
      <ProfileCard />
    </MainLayout>
  );
};

export default ProfileScreen;
