import React, {useEffect, useRef} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import MainLayout from '../../components/MainLayout';
import {useAppStore} from '../../store/appStore';
import {getAlbumInfo} from '../../services/albumService';
import ProfileImage from '../../components/ProfileImage';
import {TrackItem} from './components/TrackItem';
import {ListEmptyComponent} from '../../components/listEmptyComponent';
import {scaledSize, scaledY} from '../../utils/scaleSize';

export const TracksScreen = () => {
  const scrollX = useSharedValue(0);
  const ref = useRef<FlatList>(null);
  const {albumInfo, loading, albumName, artist} = useAppStore();
  const onScrollHandler = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.y;
  });
  useEffect(() => {
    if (artist && albumName) {
      setTimeout(() => {
        getAlbumInfo(artist, albumName);
      });
    }
  }, [artist, albumName]);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollX.value,
            [-48, 0, 48],
            [-48 / 2, 0, 48 * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [-48, 0, 100],
            [1.25, 1, 1.2],
            'clamp',
          ),
        },
      ],
      opacity: interpolate(scrollX.value, [0, 140], [1, 0.5]),
    };
  });

  return (
    <MainLayout isBackBtn title="Tracks">
      <Animated.FlatList
        style={styles.flat}
        ref={ref}
        ListHeaderComponent={
          <Animated.View style={[headerAnimatedStyle, styles.imageView]}>
            <ProfileImage />
          </Animated.View>
        }
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        decelerationRate={0.8}
        contentContainerStyle={styles.content}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        data={albumInfo?.tracks?.track ?? []}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item?.name}
        ListEmptyComponent={<ListEmptyComponent loading={loading} />}
        renderItem={({item, index}) => {
          return <TrackItem {...{index, item}} />;
        }}
      />
    </MainLayout>
  );
};
export default TracksScreen;
const styles = StyleSheet.create({
  flat: {
    alignSelf: 'center',
    marginTop: 30,
    width: '100%',
  },
  imageView: {width: '100%', alignItems: 'center'},
  image: {width: '100%', height: '100%', position: 'absolute'},
  content: {
    paddingHorizontal: scaledSize(10),
    gap: scaledY(10),
    paddingBottom: 100,
  },
});
