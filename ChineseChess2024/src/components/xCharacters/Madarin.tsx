import React from 'react';
import {Text, TextProps, View} from 'react-native';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/theme';
import {Color} from '../../enum/color';

interface ColorProp extends TextProps {
  color?: Color;
}

export default function Madarin(props: ColorProp): React.JSX.Element {
  const chacracter = props.color === Color.Red ? 0x1fa61 : 0x1fa68;
  return (
    <View>
      <Text
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: FONT_SIZE,
        }}>
        {String.fromCodePoint(chacracter)}
      </Text>
    </View>
  );
}
