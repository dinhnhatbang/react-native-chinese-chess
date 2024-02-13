import React from 'react';
import {TextProps, View} from 'react-native';
import {
  CHARACTER_COLOR,
  CHARACTER_SIZE,
  CHARACTER_THIN,
} from '../../constants/theme';
import {JustifyContent} from '../../enum/justifyContent';

interface HeavyDownAndRightProp extends TextProps {
  align?: JustifyContent;
}

export default function HeavyDownAndRight(
  props: HeavyDownAndRightProp,
): React.JSX.Element {
  return (
    <View
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE,
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: CHARACTER_THIN,
          height: CHARACTER_SIZE,
          backgroundColor: CHARACTER_COLOR,
        }}></View>
      <View
        style={{
          width: CHARACTER_SIZE,
          height: CHARACTER_THIN,
          backgroundColor: CHARACTER_COLOR,
        }}></View>
    </View>
  );
}
