import {CharacterEnum, CharacterTypeEnum} from '../../enum/character';
import {Color} from '../../enum/color';
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

const soliderCanNotMoveRule = (
  previous: MovingCharacterType,
  current: MovingCharacterType,
) => {
  const isBackward = () => {
    if (previous.character.color === Color.Red) {
      if (previous.row.charCodeAt(0) > current.row.charCodeAt(0)) {
        return true;
      }
    }
    if (previous.character.color === Color.Black) {
      if (previous.row.charCodeAt(0) < current.row.charCodeAt(0)) {
        return true;
      }
    }

    return false;
  };

  const isCrossRiver = () => {
    console.log('previous', previous.row.charCodeAt(0));
    if (
      previous.character.color === Color.Red &&
      previous.row.charCodeAt(0) > 69
    ) {
      return true;
    }
    if (
      previous.character.color === Color.Black &&
      previous.row.charCodeAt(0) < 70
    ) {
      return true;
    }

    return false;
  };

  if (isBackward()) {
    return true;
  }
  const rowDiff = Math.abs(
    previous.row.charCodeAt(0) - current.row.charCodeAt(0),
  );

  const columnDiff = Math.abs(previous.column - current.column);
  if (rowDiff + columnDiff > 1) {
    return true;
  }

  console.log('isCrossRiver', isCrossRiver(), rowDiff);

  if (!isCrossRiver() && columnDiff == 1) {
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
    return soliderCanNotMoveRule(previous, current);
  }

  return false;
};
