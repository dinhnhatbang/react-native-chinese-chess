import {CharacterEnum, CharacterTypeEnum} from '../../enum/character';
import {MovingCharacterType} from '../../types/characterType';

const eatingSameColor = (
  previous: MovingCharacterType,
  current: MovingCharacterType,
) => {
  return (
    previous.character.color === current.character.color &&
    current.character.type !== CharacterTypeEnum.Drawing
  );
};

const soliderRule = (
  previous: MovingCharacterType,
  current: MovingCharacterType,
) => {
  const rowDiff = Math.abs(
    previous.row.charCodeAt(0) - current.row.charCodeAt(0),
  );
  const columnDiff = Math.abs(previous.column - current.column);
  if (rowDiff + columnDiff > 1) {
    return true;
  }
  return false;
};

export const canNotMove = (
  previous: MovingCharacterType,
  current: MovingCharacterType,
) => {
  if (eatingSameColor(previous, current)) {
    return true;
  }
  if (previous.character.name === CharacterEnum.Solider) {
    return soliderRule(previous, current);
  }

  return false;
};
