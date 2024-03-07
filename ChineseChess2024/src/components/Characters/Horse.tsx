import React from 'react';
import {TextProps} from 'react-native';
import {Color} from '../../enum/color';
import CharacterWrapper from './CharacterWrapper';

interface ColorProp extends TextProps {
  color?: Color;
}

export default function Horse(props: ColorProp): React.JSX.Element {
  return (
    <CharacterWrapper
      color={props.color}
      redCharacter={0x1fa63}
      blackCharacter={0x1fa6a}
    />
  );
}
