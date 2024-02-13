import React from 'react';
import {TextProps, View} from 'react-native';
import {
  CHARACTER_COLOR,
  CHARACTER_SIZE,
  CHARACTER_HEAVY,
} from '../../constants/theme';
import {JustifyContent} from '../../enum/justifyContent';

interface HeavyDownAndLeftProp extends TextProps {
  align?: JustifyContent;
}

export default function HeavyDownAndLeft(
  props: HeavyDownAndLeftProp,
): React.JSX.Element {
  return (
    <View
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE,
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}>
      <View
        style={{
          width: CHARACTER_SIZE,
          height: CHARACTER_HEAVY,
          backgroundColor: CHARACTER_COLOR,
        }}></View>
      <View
        style={{
          width: CHARACTER_HEAVY,
          height: CHARACTER_SIZE,
          backgroundColor: CHARACTER_COLOR,
        }}></View>
    </View>
  );
}
