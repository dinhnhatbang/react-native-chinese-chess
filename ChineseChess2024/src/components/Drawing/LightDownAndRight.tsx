import React from 'react';
import {TextProps, View} from 'react-native';
import {
  CHARACTER_COLOR,
  CHARACTER_SIZE,
  CHARACTER_HEAVY,
  CHARACTER_LIGHT,
} from '../../constants/theme';
import {JustifyContent} from '../../enum/justifyContent';

interface LightDownAndRightProp extends TextProps {
  align?: JustifyContent;
}

export default function LightDownAndRight(
  props: LightDownAndRightProp,
): React.JSX.Element {
  return (
    <View
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE,
        flexDirection: 'row',
        marginTop: CHARACTER_SIZE,
      }}>
      <View
        style={{
          width: CHARACTER_LIGHT,
          height: CHARACTER_SIZE / 2,
          backgroundColor: CHARACTER_COLOR,
          marginLeft: CHARACTER_SIZE / 2,
        }}></View>
      <View
        style={{
          width: CHARACTER_SIZE / 2,
          height: CHARACTER_LIGHT,
          backgroundColor: CHARACTER_COLOR,
        }}></View>
    </View>
  );
}
