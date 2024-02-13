import React from 'react';
import {View} from 'react-native';
import {
  CHARACTER_COLOR,
  CHARACTER_SIZE,
  CHARACTER_LIGHT,
} from '../../constants/theme';

export default function LightDownAndHorizontal(): React.JSX.Element {
  return (
    <View
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE / 2,
        flexDirection: 'row',
        marginTop: CHARACTER_SIZE / 2,
      }}>
      <View
        style={{
          width: CHARACTER_SIZE / 2,
          height: CHARACTER_LIGHT,
          backgroundColor: CHARACTER_COLOR,
        }}></View>
      <View
        style={{
          width: CHARACTER_LIGHT,
          height: CHARACTER_SIZE / 2,
          backgroundColor: CHARACTER_COLOR,
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
