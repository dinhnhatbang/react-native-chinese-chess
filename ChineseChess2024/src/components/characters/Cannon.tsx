import React from 'react';
import {Text, View} from 'react-native';
import {Color} from '../../enum/color';

export default function Cannon(color: Color = Color.Black): React.JSX.Element {
  const chacracter = color === Color.Red ? 0x1fa65 : 0x1fa6c;
  const move = () => {};
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
