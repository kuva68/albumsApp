import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProfileImage from '../../../components/ProfileImage';
import UserName from './UserName';
import {scaledY} from '../../../utils/scaleSize';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

const ProfileCard = () => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-48, 0, 70],
            [-48 / 2, 0, 48 * 0.75],
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-48, 0, 48], [1.2, 1, 1.1]),
        },
      ],
      opacity: interpolate(scrollOffset.value, [0, 170], [1, 0.5]),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cardInnerContainer}>
        <Animated.View style={[headerAnimatedStyle, styles.imageView]}>
          <ProfileImage />
        </Animated.View>

        <UserName style={styles.mTop} />
      </Animated.ScrollView>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  mTop: {marginTop: scaledY(41), marginBottom: scaledY(24)},
  cardInnerContainer: {
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  imageView: {width: '100%', alignItems: 'center'},
  container: {paddingTop: 20},
});
