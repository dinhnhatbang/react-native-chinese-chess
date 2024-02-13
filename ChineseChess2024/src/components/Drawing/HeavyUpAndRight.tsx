import React from 'react';
import {View} from 'react-native';
import {
  CHARACTER_COLOR,
  CHARACTER_SIZE,
  CHARACTER_THIN,
} from '../../constants/theme';

export default function HeavyUpAndRight(): React.JSX.Element {
  return (
    <View
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: 'yellow',
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
