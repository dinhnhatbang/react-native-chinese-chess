import React from 'react';
import {TextProps} from 'react-native';
import {Color} from '../../enum/color';
import CharacterWrapper from './CharacterWrapper';

interface ColorProp extends TextProps {
  color?: Color;
}

export default function Chariot(props: ColorProp): React.JSX.Element {
  return (
    <CharacterWrapper
      color={props.color}
      redCharacter={0x1fa64}
      blackCharacter={0x1fa6b}
    />
  );
}
