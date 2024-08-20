import React, {ReactNode} from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {scaledSize, scaledY} from '../utils/scaleSize';
import {Text} from './Text';
import {theme} from '../theme/themes';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icons} from '../constants/icons';
import {useNavigation} from '@react-navigation/native';

export const MainLayout = ({
  children,
  title,
  isBackBtn,
}: {
  title: string;
  isBackBtn?: boolean;
  children: ReactNode;
}) => {
  const navigation = useNavigation();
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <LinearGradient
      colors={['#9A0041', '#FF565A', '#FF9F5A']}
      useAngle
      style={styles.main}>
      <SafeAreaView edges={['top']} style={styles.main}>
        <View style={styles.top}>
          {isBackBtn ? (
            <TouchableOpacity onPress={onBackPress} style={styles.touch}>
              <Icons.ShevoronLeft
                width={28}
                height={28}
                fill={theme.colors.white}
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.touch} />
          )}
          <Text style={styles.title} preset="title">
            {title}
          </Text>
          <View style={styles.touch} />
        </View>
        <View style={styles.carouselContainer}>{children}</View>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default MainLayout;
const styles = StyleSheet.create({
  main: {flex: 1},
  title: {color: 'white', alignSelf: 'center'},
  carouselContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: theme.colors.white,
    flex: 1,
    overflow: 'hidden',
  },
  touch: {
    width: scaledSize(50),
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaledSize(10),
    height: scaledY(60),
    alignItems: 'center',
  },
});
