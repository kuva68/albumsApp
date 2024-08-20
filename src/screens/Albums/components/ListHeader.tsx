import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../../theme/themes';
import {Text} from '../../../components/Text';
import {Icons} from '../../../constants/icons';
import {scaledSize} from '../../../utils/scaleSize';

export const ListHeader = ({
  name,
  onPress,
}: {
  name: string;
  onPress: () => void;
}) => {
  return (
    <View style={styles.main}>
      <View style={styles.side} />
      <Text preset="accentTitle" style={styles.title}>
        {name}
      </Text>
      <TouchableOpacity onPress={onPress} style={styles.right}>
        <Text style={styles.text}>About</Text>
        <Icons.ShevoronLeft
          style={styles.icon}
          width={20}
          height={24}
          fill={theme.colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    width: scaledSize(375),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scaledSize(20),
    marginTop: scaledSize(20),
  },
  side: {width: scaledSize(60), height: 20},
  right: {
    alignItems: 'center',
    gap: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: scaledSize(60),
  },
  title: {width: scaledSize(150), textAlign: 'center'},
  text: {color: theme.colors.primary, fontSize: 12},
  icon: {transform: [{rotate: '180deg'}]},
});
