import React from 'react';
import {TextProps, TouchableOpacity, View} from 'react-native';
import {CHARACTER_SIZE} from '../../constants/theme';
import {CharacterEnum} from '../../enum/character';
import {CharacterType} from '../../types/characterType';
import Cannon from './Cannon';
import Chariot from './Chariot';
import Elephant from './Elephant';
import General from './General';
import Horse from './Horse';
import Madarin from './Madarin';
import Solider from './Solider';

interface CharacterProp extends TextProps {
  name?: string;
  character: CharacterType;
  setBoardCharacters: any;
}

export default function CharacterFactory(
  props: CharacterProp,
): React.JSX.Element {
  const factory = (character: CharacterType) => {
    switch (character.name) {
      case CharacterEnum.Cannon:
        return <Cannon color={character.color} />;
      case CharacterEnum.Chariot:
        return <Chariot color={character.color} />;
      case CharacterEnum.Solider:
        return <Solider color={character.color} />;
      case CharacterEnum.General:
        return <General color={character.color} />;
      case CharacterEnum.Horse:
        return <Horse color={character.color} />;
      case CharacterEnum.Elephant:
        return <Elephant color={character.color} />;
      case CharacterEnum.Madarin:
        return <Madarin color={character.color} />;
    }
  };

  return (
    <View
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          const currentCharacter = props.character;
          console.log('currentCharacter', {
            ...currentCharacter,
            index: props.name,
          });
        }}>
        {factory(props.character)}
      </TouchableOpacity>
    </View>
  );
}
