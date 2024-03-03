import {CharacterEnum, CharacterTypeEnum} from '../../enum/character';
import {Color} from '../../enum/color';
import {CharacterType} from '../../types/characterType';

export const getCharacterBaseOnPosition = (
  row: string,
  column: number,
  currentCharacter: CharacterType,
): CharacterType => {
  console.log(
    'row',
    row,
    'column',
    column,
    'currentCharacter',
    currentCharacter,
  );
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
    if (row === 'J' && currentCharacter.type === CharacterTypeEnum.Drawing) {
      return {
        color: Color.Black,
        name: CharacterEnum.LightDownAndLeft,
        type: CharacterTypeEnum.Drawing,
      } as CharacterType;
    }
    if (currentCharacter.type === CharacterTypeEnum.Drawing) {
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
