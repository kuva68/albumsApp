import {TextStyle, StyleSheet} from 'react-native';

import {scaledSize} from '../../utils/scaleSize';
import {theme} from '../../theme/themes';

const BASE: TextStyle = {
  fontSize: scaledSize(14),
  lineHeight: scaledSize(18),
  fontWeight: '400',
};

interface ITextStyles {
  default: TextStyle;
  title: TextStyle;
  secondary: TextStyle;
  tertiary: TextStyle;
  accentTitle: TextStyle;
  accentLight: TextStyle;
  error: TextStyle;
  buttonText: TextStyle;
}

export type TextPreset = keyof ITextStyles;

export const darkStyle = StyleSheet.create<ITextStyles>({
  default: {...BASE, color: theme.colors.text},

  title: {
    ...BASE,
    fontSize: scaledSize(24),
    lineHeight: scaledSize(28),
    fontWeight: '700',
  },
  accentTitle: {
    ...BASE,
    fontSize: scaledSize(22),
    lineHeight: scaledSize(26),
    fontWeight: '700',
    color: theme.colors.primary,
  },
  accentLight: {
    ...BASE,
    color: theme.colors.primary,
    fontSize: scaledSize(12),
    lineHeight: scaledSize(18),
  },
  secondary: {
    ...BASE,
    fontSize: scaledSize(16),
    lineHeight: scaledSize(21),
  },
  tertiary: {
    ...BASE,
    fontSize: 12,
    lineHeight: 16,
  },
  error: {
    ...BASE,
    color: theme.colors.red,
    fontSize: scaledSize(12),
    lineHeight: scaledSize(18),
  },
  buttonText: {
    ...BASE,
  },
});
