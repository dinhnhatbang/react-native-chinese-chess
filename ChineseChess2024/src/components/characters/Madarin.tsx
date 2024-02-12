import React from 'react';
import {Text, View} from 'react-native';

export default function Madarin(): React.JSX.Element {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'BabelStoneXiangqiColour',
          fontSize: 30,
        }}>
        {String.fromCodePoint(0x1fa61)}
      </Text>
    </View>
  );
}
