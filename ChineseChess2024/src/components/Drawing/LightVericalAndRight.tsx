import React from 'react';
import {View} from 'react-native';
import {
  CHARACTER_COLOR,
  CHARACTER_SIZE,
  CHARACTER_LIGHT,
  FONT_SIZE,
} from '../../constants/theme';

export default function LightVerticalAndRight(): React.JSX.Element {
  return (
    <View
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: FONT_SIZE,
      }}>
      <View
        style={{
          width: CHARACTER_LIGHT,
          height: CHARACTER_SIZE,
          backgroundColor: CHARACTER_COLOR,
        }}></View>
      <View
        style={{
          width: CHARACTER_SIZE,
          height: CHARACTER_LIGHT,
          backgroundColor: CHARACTER_COLOR,
        }}></View>
    </View>
  );
}
