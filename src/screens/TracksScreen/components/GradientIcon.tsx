import {StyleSheet, View} from 'react-native';

import React from 'react';
import {Defs, Ellipse, RadialGradient, Stop, Svg} from 'react-native-svg';
import {scaledSize} from '../../../utils/scaleSize';
import {colors} from '../../../constants/colors';
export const GradientIcon = ({
  secret,
  index,
}: {
  secret: string;
  index: number;
}) => {
  let colorArr = [
    //@ts-ignore
    colors[1],
    colors['2' as keyof typeof colors],
    colors['3' as keyof typeof colors],
    colors['4' as keyof typeof colors],
    colors['5' as keyof typeof colors],
    colors['6' as keyof typeof colors],
  ];
  if (secret) {
    colorArr = secret
      ?.slice(0, 6)
      ?.split('')
      //@ts-ignore
      ?.map((el, i) => colors[el.toLowerCase()] ?? colors[i]);
  }
  return (
    <View style={styles.main}>
      <Svg height="60" width="60">
        <Defs>
          <RadialGradient
            id="grad"
            cx={22 + (index % 3)}
            cy={30 - (index % 3)}
            rx={30 - (index % 2)}
            ry={22 + (index % 2)}
            fx={18}
            fy={18}
            gradientUnits="userSpaceOnUse">
            <Stop
              offset={0.25 - (index % 3) / 100}
              stopColor={colorArr[0]}
              stopOpacity="1"
            />
            <Stop
              offset={0.4 + (index % 3) / 100}
              stopColor={colorArr[1]}
              stopOpacity={1 - (index % 3) / 10}
            />
            <Stop
              offset={0.6 - (index % 2) / 100}
              stopColor={colorArr[2] ?? colors['2']}
              stopOpacity={1 - (index % 2) / 10}
            />
            <Stop
              offset={0.7 + (index % 2) / 100}
              stopColor={colorArr[3] ?? colors['3']}
              stopOpacity={1 - (index % 2) / 5}
            />
            <Stop
              offset={0.9 - (index % 4) / 100}
              stopColor={colorArr[4] ?? colors['4']}
              stopOpacity={1 - (index % 4)}
            />
            <Stop
              offset="1"
              stopColor={colorArr[5] ?? colors['5']}
              stopOpacity="1"
            />
          </RadialGradient>
        </Defs>
        <Ellipse cx="30" cy="30" rx="30" ry="30" fill="url(#grad)" />
      </Svg>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    borderRadius: 30,
    width: scaledSize(50),
    height: scaledSize(50),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
