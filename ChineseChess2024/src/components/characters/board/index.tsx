import React from 'react';
import {Text, View} from 'react-native';

export default function Board(): React.JSX.Element {
  const characters = {
    lightHorizontal: '\u2500',
    heavyHorizontal: '\u2501',
    heavyDownAndRight: '\u250F',
    heavyDownAndLeft: '\u2513',
  };
  const Header = () => {
    return (
      <Text
        style={{
          fontFamily: 'BabelStoneXiangqiColour',
          fontSize: 30,
        }}>
        {characters.heavyDownAndRight}
        {characters.heavyHorizontal}
        {characters.heavyHorizontal}
        {characters.heavyHorizontal}
        {characters.heavyHorizontal}
        {characters.heavyHorizontal}
        {characters.heavyHorizontal}
        {characters.heavyHorizontal}
        {characters.heavyHorizontal}
        {characters.heavyHorizontal}
        {characters.heavyDownAndLeft}
      </Text>
    );
  };
  return (
    <View>
      <Header />
    </View>
  );
}
