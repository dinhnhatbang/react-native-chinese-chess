import React from 'react';
import {TextProps} from 'react-native';
import {Color} from '../../enum/color';
import CharacterWrapper from './CharacterWrapper';

interface ColorProp extends TextProps {
  color?: Color;
}

export default function Cannon(props: ColorProp): React.JSX.Element {
  return (
    <CharacterWrapper
      color={props.color}
      redCharacter={0x1fa65}
      blackCharacter={0x1fa6c}
    />
  );
}
