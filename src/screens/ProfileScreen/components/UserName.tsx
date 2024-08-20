import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {scaledSize, scaledY} from '../../../utils/scaleSize';
import {Text} from '../../../components/Text';
import {theme} from '../../../theme/themes';
import {useAppStore} from '../../../store/appStore';
import TextField from '../../../components/TextField';
import {removeHtmlTags} from '../../../utils';

const UserName = ({style}: {style: ViewStyle}) => {
  const {artistInfo: info, albumInfo} = useAppStore();
  return (
    <View style={[styles.main, style]}>
      {albumInfo?.name && (
        <TextField text={albumInfo?.name ?? ''} title="Album Name:" />
      )}
      {albumInfo?.releasedate && (
        <TextField text={albumInfo?.releasedate ?? ''} title="Release Date:" />
      )}
      {albumInfo?.toptags?.tag?.[0]?.name && (
        <TextField
          text={albumInfo?.toptags?.tag?.[0]?.name ?? ''}
          title="Tag:"
        />
      )}
      <Text preset="secondary" style={styles.addressWallet}>
        {removeHtmlTags(albumInfo?.wiki?.content ?? '')}
      </Text>
      <Text preset="secondary" style={styles.addressWallet}>
        {removeHtmlTags(info?.bio?.summary ?? '')}
      </Text>
    </View>
  );
};

export default UserName;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 30,
    height: scaledSize(50),
    justifyContent: 'center',
    paddingHorizontal: scaledSize(20),
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    gap: scaledSize(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scaledY(10),
  },
  copiedText: {
    color: theme.colors.background,
  },
  copiedTextView: {
    position: 'absolute',
    top: scaledSize(-20),
    alignSelf: 'center',
    backfaceVisibility: 'hidden',
    zIndex: 5000,
    elevation: 20,
    shadowColor: '#00000060',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 10},
  },
  copyGradient: {
    width: 70,
    height: 30,
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    marginVertical: scaledY(20),
    width: scaledSize(335),
  },
  text: {color: '#00000090'},
  btnTextStyle: {
    color: 'white',
  },
  main: {width: '100%', gap: scaledY(8)},
  addressWallet: {color: '#00000090'},

  gradient: {
    height: scaledSize(50),
    width: scaledSize(109),
    borderRadius: 30,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touch: {position: 'absolute', right: 0, top: 0},
  bottom: {gap: scaledY(10)},
});
