import React, {useMemo, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import {scaledSize, scaledY} from '../utils/scaleSize';
import {theme} from '../theme/themes';
import {useAppStore} from '../store/appStore';
import {Icons} from '../constants/icons';

const ProfileImage = () => {
  const [imageLoading, setImageLoading] = useState(true);
  const info = useAppStore(state => state.albumInfo);
  const url = useMemo(
    () => info?.image?.find(el => el.size === 'extralarge')?.['#text'] ?? '',
    [info],
  );
  if (imageLoading) {
    <View style={styles.innerContainer}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>;
  }

  return (
    <View style={styles.emptyImage}>
      <Image
        resizeMode="cover"
        source={
          url
            ? {
                uri: url,
              }
            : Icons.Signer
        }
        onLoadEnd={() => setImageLoading(false)}
        style={styles.imageStyle}
        defaultSource={Icons.Signer}
      />
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: theme.colors.background,
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    width: scaledSize(275),
    height: scaledSize(275),
    zIndex: 8,
    borderRadius: 16,
  },
  emptyImage: {
    alignItems: 'center',
    justifyContent: 'center',
    height: scaledY(275),
    overflow: 'hidden',
    width: '100%',
  },
});
