import React from 'react';
import {TextProps, TouchableOpacity, View} from 'react-native';
import {CHARACTER_SIZE} from '../../constants/theme';
import {Color} from '../../enum/color';
import Cannon from './Cannon';

interface CharacterProp extends TextProps {
  name?: string;
}

export default function Character(props: CharacterProp): React.JSX.Element {
  return (
    <View
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity>
        <Cannon color={Color.Black} />
      </TouchableOpacity>
    </View>
  );
}
