import {Color} from '../../../enum/color';
import {MovingCharacterType} from '../../../types/characterType';

export const soliderCanNotMoveRule = (
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

  if (!isCrossRiver() && columnDiff == 1) {
    return true;
  }

  return false;
};
