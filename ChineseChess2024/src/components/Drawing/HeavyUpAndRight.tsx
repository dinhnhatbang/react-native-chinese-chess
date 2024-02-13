import React from 'react';
import {View} from 'react-native';
import {
  CHARACTER_COLOR,
  CHARACTER_SIZE,
  CHARACTER_HEAVY,
} from '../../constants/theme';

export default function HeavyUpAndRight(): React.JSX.Element {
  return (
    <View
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE,
        flexDirection: 'row',
        alignItems: 'flex-end',
      }}>
      <View
        style={{
          width: CHARACTER_HEAVY,
          height: CHARACTER_SIZE,
          backgroundColor: CHARACTER_COLOR,
        }}></View>
      <View
        style={{
          width: CHARACTER_SIZE,
          height: CHARACTER_HEAVY,
          backgroundColor: CHARACTER_COLOR,
        }}></View>
    </View>
  );
}
