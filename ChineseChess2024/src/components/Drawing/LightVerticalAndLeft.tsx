import React from 'react';
import {View} from 'react-native';
import {
  CHARACTER_COLOR,
  CHARACTER_SIZE,
  CHARACTER_LIGHT,
  FONT_SIZE,
} from '../../constants/theme';

export default function LightVerticalAndLeft(): React.JSX.Element {
  return (
    <View
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE,
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: CHARACTER_SIZE / 2,
          marginTop: CHARACTER_SIZE / 2,
          height: CHARACTER_LIGHT,
          backgroundColor: CHARACTER_COLOR,
        }}></View>
      <View
        style={{
          width: CHARACTER_LIGHT,
          height: CHARACTER_SIZE,
          backgroundColor: CHARACTER_COLOR,
        }}></View>
    </View>
  );
}
