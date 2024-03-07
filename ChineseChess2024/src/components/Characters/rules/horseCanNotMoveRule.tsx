import {CharacterTypeEnum} from '../../../enum/character';
import {MovingCharacterType} from '../../../types/characterType';
import {CAN_MOVE, CAN_NOT_MOVE} from './ruleEnum';

export const horseCanNotMoveRule = (
  previous: MovingCharacterType,
  current: MovingCharacterType,
  currentBoardCharacters: any,
) => {
  const previousRowNumber = previous.row.charCodeAt(0);
  const currentRowNumber = current.row.charCodeAt(0);
  const columnDiff = Math.abs(previous.column - current.column);
  const rowDiff = Math.abs(previousRowNumber - currentRowNumber);
  if (columnDiff === 1 && rowDiff === 2) {
    const rowBetween = String.fromCharCode(
      (previousRowNumber + currentRowNumber) / 2,
    );
    if (
      currentBoardCharacters[rowBetween][previous.column].type ===
      CharacterTypeEnum.Character
    ) {
      return CAN_NOT_MOVE;
    }
    return CAN_MOVE;
  }
  if (columnDiff === 2 && rowDiff === 1) {
    const columnBetween = (previous.column + current.column) / 2;
    if (
      currentBoardCharacters[previous.row][columnBetween].type ===
      CharacterTypeEnum.Character
    ) {
      return CAN_NOT_MOVE;
    }
    return CAN_MOVE;
  }
  return CAN_NOT_MOVE;
};
