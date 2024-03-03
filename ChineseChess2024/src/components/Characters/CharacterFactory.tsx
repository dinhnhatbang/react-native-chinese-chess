import React from 'react';
import {TextProps, TouchableOpacity, View} from 'react-native';
import {CHARACTER_SIZE} from '../../constants/theme';
import {CharacterType, MovingCharacterType} from '../../types/characterType';
import {factory} from './Factory';
import {getCharacterBaseOnPosition} from './Moving';
import {CharacterTypeEnum} from '../../enum/character';

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
  const moving = () => {
    const currentCharacter = props.character;
    if (!props.previousSelected) {
      if (currentCharacter.type === CharacterTypeEnum.Drawing) {
        return;
      }
      props.setPreviousSelected({
        character: currentCharacter,
        row: props.row,
        column: props.column,
      });
      return;
    }
    const currentBoardCharacters = props.boardCharacters;
    const newBoardCharacters = currentBoardCharacters;
    const characterA = getCharacterBaseOnPosition(
      props.row,
      props.column,
      props.previousSelected.character,
    );
    const characterB = getCharacterBaseOnPosition(
      props.previousSelected.row,
      props.previousSelected.column,
      {type: CharacterTypeEnum.Drawing} as CharacterType,
    );
    if (
      characterA.type === CharacterTypeEnum.Drawing &&
      characterB.type === CharacterTypeEnum.Drawing
    ) {
      props.setPreviousSelected(undefined);
      return;
    }
    newBoardCharacters[props.row][props.column] = characterA;
    newBoardCharacters[props.previousSelected.row][
      props.previousSelected.column
    ] = characterB;
    props.setBoardCharacters(newBoardCharacters);
    props.setPreviousSelected(undefined);
  };

  return (
    <TouchableOpacity
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={moving}>
      {factory(props.character)}
    </TouchableOpacity>
  );
}
