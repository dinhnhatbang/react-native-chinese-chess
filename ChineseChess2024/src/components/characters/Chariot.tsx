import React from 'react';
import {Text, TextProps, View} from 'react-native';
import {Color} from '../../enum/color';

interface ColorProp extends TextProps {
  color?: Color;
}

export default function Chariot(props: ColorProp): React.JSX.Element {
  const chacracter = props.color === Color.Red ? 0x1fa64 : 0x1fa6b;
  return (
    <View>
      <Text
        style={{
          fontFamily: 'BabelStoneXiangqiColour',
          fontSize: 30,
        }}>
        {String.fromCodePoint(chacracter)}
      </Text>
    </View>
  );
}
