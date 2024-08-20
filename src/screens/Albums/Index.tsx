import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import MainLayout from '../../components/MainLayout';
import {CarouselItem} from './components/CarouselItem';
import {useAppStore} from '../../store/appStore';
import {getTopAlbums} from '../../services/albumService';
import {ListHeader} from './components/ListHeader';
import {EnScreens} from '../../types/enums';
import {useNavigation} from '@react-navigation/native';
import {scaledSize} from '../../utils/scaleSize';
import {ListEmptyComponent} from '../../components/listEmptyComponent';

export const AlbumScreen = () => {
  const scrollX = useSharedValue(0);
  const ref = useRef<FlatList>(null);
  const {albums, loading} = useAppStore();
  const onScrollHandler = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x;
  });
  useEffect(() => {
    getTopAlbums();
  }, []);
  const name = useMemo(() => albums?.[0]?.artist?.name ?? '', [albums]);
  const navigation = useNavigation();
  const onPress = useCallback(
    (redirect: EnScreens) => {
      const albumName =
        albums[Math.round(scrollX.value / scaledSize(375))].name;
      useAppStore.setState({artist: name, albumName: albumName});
      navigation.navigate(redirect);
    },
    [name, navigation, albums, scrollX.value],
  );

  return (
    <MainLayout title="Albums">
      <ListHeader onPress={() => onPress(EnScreens.ABOUT)} name={name} />
      <Animated.FlatList
        style={styles.flat}
        ref={ref}
        horizontal
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        decelerationRate={0.8}
        disableIntervalMomentum={true}
        data={albums}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item?.name}
        pagingEnabled={true}
        snapToAlignment={'center'}
        ListEmptyComponent={<ListEmptyComponent loading={loading} />}
        renderItem={({item, index}) => {
          return (
            <CarouselItem
              {...{
                index,
                item,
                scrollX,
                onPress: () => onPress(EnScreens.TRACKS),
              }}
            />
          );
        }}
      />
    </MainLayout>
  );
};
export default AlbumScreen;
const styles = StyleSheet.create({
  flat: {alignSelf: 'center'},
});
