import React, {useState} from 'react';
import {TextProps, TouchableOpacity, View} from 'react-native';
import {CHARACTER_SIZE} from '../../constants/theme';
import {CharacterEnum, CharacterTypeEnum} from '../../enum/character';
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
import {Color} from '../../enum/color';
import LightDownAndRight from '../Drawing/LightDownAndRight';
import LightDownAndHorizontal from '../Drawing/LightDownAndHorizontal';

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
      case CharacterEnum.LightDownAndRight:
        return <LightDownAndRight />;
      case CharacterEnum.LightDownAndHorizontal:
        return <LightDownAndHorizontal />;
    }
  };

  const getCharacterBaseOnPosition = (
    row: string,
    column: number,
    currentCharacter: CharacterType,
  ): CharacterType => {
    if (column === 0) {
      if (row === 'J' && currentCharacter.type === CharacterTypeEnum.Drawing) {
        return {
          color: Color.Black,
          name: CharacterEnum.LightDownAndRight,
          type: CharacterTypeEnum.Drawing,
        } as CharacterType;
      }
      if (currentCharacter.type === CharacterTypeEnum.Drawing) {
        return {
          color: Color.Black,
          name: CharacterEnum.LightVerticalAndRight,
          type: CharacterTypeEnum.Drawing,
        } as CharacterType;
      }
    }
    if (column === 8) {
      if (
        currentCharacter.name === CharacterEnum.LightVerticalAndRight ||
        currentCharacter.name === CharacterEnum.LightVerticalAndHorizontal
      ) {
        return {
          color: Color.Black,
          name: CharacterEnum.LightVerticalAndLeft,
          type: CharacterTypeEnum.Drawing,
        } as CharacterType;
      }
    }
    if (column > 0 && column < 8) {
      if (row === 'J' && currentCharacter.type === CharacterTypeEnum.Drawing) {
        return {
          color: Color.Black,
          name: CharacterEnum.LightDownAndHorizontal,
          type: CharacterTypeEnum.Drawing,
        } as CharacterType;
      }
      if (currentCharacter.type === CharacterTypeEnum.Drawing) {
        return {
          color: Color.Black,
          name: CharacterEnum.LightVerticalAndHorizontal,
          type: CharacterTypeEnum.Drawing,
        } as CharacterType;
      }
    }
    return currentCharacter;
  };

  const handleCharacterMovement = () => {
    const currentCharacter = props.character;
    if (!props.previousSelected) {
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
      currentCharacter,
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
    <View
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={handleCharacterMovement}>
        {factory(props.character)}
      </TouchableOpacity>
    </View>
  );
}
