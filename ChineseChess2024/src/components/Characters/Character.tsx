import React, {ReactNode} from 'react';
import {TextProps, TouchableOpacity, View} from 'react-native';
import {CHARACTER_SIZE} from '../../constants/theme';
import {Color} from '../../enum/color';
import Cannon from './Cannon';

interface CharacterProp extends TextProps {
  name?: string;
  character: ReactNode;
}

export default function Character(props: CharacterProp): React.JSX.Element {
  return (
    <View
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity>{props.character}</TouchableOpacity>
    </View>
  );
}
