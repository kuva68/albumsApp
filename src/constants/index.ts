import {Dimensions} from 'react-native';
import {scaledSize, scaledY} from '../utils/scaleSize';

export const cardWidth = scaledSize(373);
export const cardHeight = scaledY(560);
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const CARD_LENGTH = SCREEN_WIDTH * 0.8;
export const SPACING = SCREEN_WIDTH * 0.02;
export const SIDECARD_LENGTH = (SCREEN_WIDTH * 0.18) / 2;
