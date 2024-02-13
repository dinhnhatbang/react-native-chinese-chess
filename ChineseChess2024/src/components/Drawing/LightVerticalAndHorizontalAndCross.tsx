import React from 'react';
import {View} from 'react-native';
import {
  CHARACTER_COLOR,
  CHARACTER_SIZE,
  CHARACTER_SIZE_FIFTY_PERCENT,
  CHARACTER_LIGHT,
  CHARACTER_SIZE_HYPOTENUSE_FIFTY_PERCENT,
} from '../../constants/theme';

export default function LightVerticalAndHorizontalAndCross(): React.JSX.Element {
  return (
    <View
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE,
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: CHARACTER_SIZE_FIFTY_PERCENT,
          height: CHARACTER_SIZE_FIFTY_PERCENT,
          marginTop: CHARACTER_SIZE_FIFTY_PERCENT,
          position: 'relative',
        }}>
        <View
          style={{
            width: CHARACTER_SIZE_HYPOTENUSE_FIFTY_PERCENT,
            height: CHARACTER_LIGHT,
            backgroundColor: CHARACTER_COLOR,
            top: (CHARACTER_SIZE_FIFTY_PERCENT / 2) * -1,
            right: (CHARACTER_SIZE_FIFTY_PERCENT / 4) * -1,
            zIndex: 99,
            transform: [{rotate: '45deg'}],
            position: 'absolute',
          }}></View>
        <View
          style={{
            width: CHARACTER_SIZE_FIFTY_PERCENT,
            height: CHARACTER_LIGHT,
            backgroundColor: CHARACTER_COLOR,
          }}></View>
        <View
          style={{
            width: CHARACTER_SIZE_HYPOTENUSE_FIFTY_PERCENT,
            height: CHARACTER_LIGHT,
            backgroundColor: CHARACTER_COLOR,
            top: CHARACTER_SIZE_FIFTY_PERCENT / 2,
            right: (CHARACTER_SIZE_FIFTY_PERCENT / 4) * -1,
            zIndex: 99,
            transform: [{rotate: '-45deg'}],
            position: 'absolute',
          }}></View>
      </View>
      <View
        style={{
          width: CHARACTER_LIGHT,
          height: CHARACTER_SIZE,
          backgroundColor: CHARACTER_COLOR,
        }}></View>
      <View
        style={{
          width: CHARACTER_SIZE_FIFTY_PERCENT,
          height: CHARACTER_SIZE_FIFTY_PERCENT,
          marginTop: CHARACTER_SIZE_FIFTY_PERCENT,
          position: 'relative',
        }}>
        <View
          style={{
            width: CHARACTER_SIZE_HYPOTENUSE_FIFTY_PERCENT,
            height: CHARACTER_LIGHT,
            backgroundColor: CHARACTER_COLOR,
            top: (CHARACTER_SIZE_FIFTY_PERCENT / 2) * -1,
            left: (CHARACTER_SIZE_FIFTY_PERCENT / 4) * -1,
            zIndex: 99,
            transform: [{rotate: '-45deg'}],
            position: 'absolute',
          }}></View>
        <View
          style={{
            width: CHARACTER_SIZE_FIFTY_PERCENT,
            height: CHARACTER_LIGHT,
            backgroundColor: CHARACTER_COLOR,
          }}></View>
        <View
          style={{
            width: CHARACTER_SIZE_HYPOTENUSE_FIFTY_PERCENT,
            height: CHARACTER_LIGHT,
            backgroundColor: CHARACTER_COLOR,
            top: CHARACTER_SIZE_FIFTY_PERCENT / 2,
            left: (CHARACTER_SIZE_FIFTY_PERCENT / 4) * -1,
            zIndex: 99,
            transform: [{rotate: '45deg'}],
            position: 'absolute',
          }}></View>
      </View>
    </View>
  );
}
