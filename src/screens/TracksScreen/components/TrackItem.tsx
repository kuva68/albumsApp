import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Text} from '../../../components/Text';
import {scaledSize, scaledY} from '../../../utils/scaleSize';
import {theme} from '../../../theme/themes';
import {ITrack} from '../../../types/interfaces';
import {GradientIcon} from './GradientIcon';

type Props = {
  item: ITrack;
  index: number;
};

export const TrackItem = (props: Props) => {
  const {item, index} = props;

  return (
    <View style={[styles.container]}>
      <GradientIcon index={index} secret={item?.name} />

      <View style={styles.titleContainer}>
        <Text numberOfLines={1} preset="accentTitle" style={styles.title}>
          {`${item?.name}`}
        </Text>
        <Text preset="accentLight">{`Duration: ${item?.duration} s`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    borderRadius: 20,
    paddingHorizontal: scaledSize(20),
    paddingVertical: scaledY(16),
    backgroundColor: theme.colors.secondaryBackground,
    gap: scaledSize(10),
  },
  middle: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {gap: scaledY(10)},

  title: {
    color: theme.colors.text,
    width: scaledSize(250),
    fontSize: scaledSize(16),
  },
});
