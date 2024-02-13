import React from 'react';
import {Text, TextProps, View} from 'react-native';
import {FONT_SIZE} from '../../constants/theme';
import {Color} from '../../enum/color';

interface CannonProp extends TextProps {
  color: Color;
}

export default function Cannon({
  color = Color.Black,
}: CannonProp): React.JSX.Element {
  const chacracter = color === Color.Red ? 0x1fa65 : 0x1fa6c;
  const move = () => {};
  return (
    <View>
      <Text
        style={{
          fontFamily: 'BabelStoneXiangqiColour',
          fontSize: FONT_SIZE,
        }}>
        {String.fromCodePoint(chacracter)}
      </Text>
    </View>
  );
}
