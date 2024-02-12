import React from 'react';
import {Text, View} from 'react-native';
import {Color} from '../../enum/color';

export default function Chariot(color: Color): React.JSX.Element {
  const chacracter = color === Color.Red ? 0x1fa64 : 0x1fa6b;
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
