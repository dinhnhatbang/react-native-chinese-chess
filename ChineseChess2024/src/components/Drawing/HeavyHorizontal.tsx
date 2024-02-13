import React from 'react';
import {TextProps, View} from 'react-native';
import {
  CHARACTER_COLOR,
  CHARACTER_SIZE,
  CHARACTER_THIN,
} from '../../constants/theme';
import {JustifyContent} from '../../enum/justifyContent';

interface HeavyHorizontalProp extends TextProps {
  align?: JustifyContent;
}

export default function HeavyHorizontal(
  props: HeavyHorizontalProp,
): React.JSX.Element {
  return (
    <View
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE,
        justifyContent: props.align,
      }}>
      <View
        style={{
          width: CHARACTER_SIZE,
          height: CHARACTER_THIN,
          backgroundColor: CHARACTER_COLOR,
        }}></View>
    </View>
  );
}
