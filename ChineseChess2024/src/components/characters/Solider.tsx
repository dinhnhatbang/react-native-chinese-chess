import React from 'react';
import {Text, View} from 'react-native';

export default function Solider(): React.JSX.Element {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'BabelStoneXiangqiColour',
          fontSize: 30,
        }}>
        {String.fromCodePoint(0x1fa66)}
      </Text>
    </View>
  );
}
