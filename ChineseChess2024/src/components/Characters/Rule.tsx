import {CharacterTypeEnum} from '../../enum/character';
import {CharacterType} from '../../types/characterType';

const eatingSameColor = (
  previousSelected: CharacterType,
  currentCharacter: CharacterType,
) => {
  return (
    previousSelected.color === currentCharacter.color &&
    currentCharacter.type !== CharacterTypeEnum.Drawing
  );
};

export const canNotMove = (
  previousSelected: CharacterType,
  currentCharacter: CharacterType,
) => {
  if (eatingSameColor(previousSelected, currentCharacter)) {
    return true;
  }
  return false;
};
