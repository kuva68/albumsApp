import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo} from 'react';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {Text} from '../../../components/Text';
import {scaledSize, scaledY} from '../../../utils/scaleSize';
import {theme} from '../../../theme/themes';
import {CARD_LENGTH, SCREEN_WIDTH} from '../../../constants';
import {IAlbum} from '../../../types/interfaces';
import {Icons} from '../../../constants/icons';

type Props = {
  item: IAlbum;
  index: number;
  scrollX: SharedValue<number>;
  onPress: () => void;
};

export const CarouselItem = (props: Props) => {
  const {item, index, scrollX, onPress} = props;

  const inputRange = [
    (index - 1) * SCREEN_WIDTH,
    index * SCREEN_WIDTH,
    (index + 1) * SCREEN_WIDTH,
  ];

  const opacityInputRange = [
    (index - 1) * SCREEN_WIDTH,
    index * SCREEN_WIDTH,
    (index + 1) * SCREEN_WIDTH,
  ];

  const translateXOutputRange = [-SCREEN_WIDTH * 0.15, 0, SCREEN_WIDTH * 0.15];

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scaleY: interpolate(
            scrollX.value,
            inputRange,
            [0.8, 1, 0.8],
            'clamp',
          ),
        },
        {
          translateX: interpolate(
            scrollX.value,
            inputRange,
            translateXOutputRange,
            'clamp',
          ),
        },
      ],
      opacity: interpolate(
        scrollX.value,
        opacityInputRange,
        [0.5, 1, 0.5],
        'clamp',
      ),
    };
  });
  const url = useMemo(() => {
    return item?.image?.find(el => el.size === 'extralarge')?.['#text'] ?? '';
  }, [item]);

  return (
    <Animated.View style={[styles.container, cardStyle]}>
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={onPress}
        style={[styles.container]}>
        <ImageBackground
          defaultSource={Icons.Signer}
          source={{uri: url}}
          style={styles.card}>
          <View style={styles.titleContainer}>
            <Text preset="title" style={styles.title}>
              {item?.name}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scaledSize(375),
  },
  card: {
    borderRadius: 18,
    backgroundColor: theme.colors.background,
    width: CARD_LENGTH,
    alignItems: 'center',
    overflow: 'hidden',
    height: scaledY(540),
    paddingVertical: scaledY(24),
    paddingHorizontal: scaledSize(20),
    justifyContent: 'flex-end',
  },

  titleContainer: {alignItems: 'center', gap: scaledY(20)},

  title: {
    color: theme.colors.primary,
    textAlign: 'center',
    textShadowColor: theme.colors.black,
    textShadowOffset: {width: 0.1, height: 0.2},
    textShadowRadius: 2,
  },
});
