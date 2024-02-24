import React, {useState} from 'react';
import {TextProps, TouchableOpacity, View} from 'react-native';
import {CHARACTER_SIZE} from '../../constants/theme';
import {CharacterEnum} from '../../enum/character';
import {CharacterType, MovingCharacterType} from '../../types/characterType';
import LightVerticalAndRight from '../Drawing/LightVericalAndRight';
import LightVerticalAndHorizontal from '../Drawing/LightVerticalAndHorizontal';
import LightVerticalAndHorizontalAndCross from '../Drawing/LightVerticalAndHorizontalAndCross';
import LightVerticalAndLeft from '../Drawing/LightVerticalAndLeft';
import Cannon from './Cannon';
import Chariot from './Chariot';
import Elephant from './Elephant';
import General from './General';
import Horse from './Horse';
import Madarin from './Madarin';
import Solider from './Solider';

interface CharacterProp extends TextProps {
  name: string;
  row: string;
  column: number;
  character: CharacterType;
  boardCharacters: any;
  setBoardCharacters: any;
  previousSelected: MovingCharacterType | undefined;
  setPreviousSelected: any;
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
      case CharacterEnum.LightVerticalAndRight:
        return <LightVerticalAndRight />;
      case CharacterEnum.LightVerticalAndHorizontal:
        return <LightVerticalAndHorizontal />;
      case CharacterEnum.LightVerticalAndHorizontalAndCross:
        return <LightVerticalAndHorizontalAndCross />;
      case CharacterEnum.LightVerticalAndLeft:
        return <LightVerticalAndLeft />;
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
          console.log('--------');
          const currentCharacter = props.character;
          if (!props.previousSelected) {
            props.setPreviousSelected({
              ...currentCharacter,
              row: props.row,
              column: props.column,
            });
          } else {
            console.log('previousSelected', {
              ...props.previousSelected,
            });
            const currentBoardCharacters = props.boardCharacters;
            const newBoardCharacters = currentBoardCharacters;
            newBoardCharacters[props.row][props.column] =
              props.previousSelected;
            newBoardCharacters[props.previousSelected.row][
              props.previousSelected.column
            ] = currentCharacter;
            props.setBoardCharacters(newBoardCharacters);
            props.setPreviousSelected(undefined);
          }
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
