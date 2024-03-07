import {CharacterTypeEnum} from '../../../enum/character';
import {MovingCharacterType} from '../../../types/characterType';
import {CAN_MOVE, CAN_NOT_MOVE} from './ruleEnum';

export const chariotCanNotMoveRule = (
  previous: MovingCharacterType,
  current: MovingCharacterType,
  currentBoardCharacters: any,
) => {
  const previousRowNumber = previous.row.charCodeAt(0);
  const currentRowNumber = current.row.charCodeAt(0);
  const columnDiff = Math.abs(previous.column - current.column);
  const rowDiff = Math.abs(previousRowNumber - currentRowNumber);
  if (columnDiff !== 0 && rowDiff !== 0) {
    return CAN_NOT_MOVE;
  }
  if (columnDiff === 0) {
    const fromRow = Math.min(previousRowNumber, currentRowNumber);
    const toRow = Math.max(previousRowNumber, currentRowNumber);
    for (let i = fromRow + 1; i < toRow; i++) {
      if (
        currentBoardCharacters[String.fromCharCode(i)][current.column].type ===
        CharacterTypeEnum.Character
      ) {
        return CAN_NOT_MOVE;
      }
    }
    return CAN_MOVE;
  }
  const fromColumn = Math.min(previous.column, current.column);
  const toColumn = Math.max(previous.column, current.column);
  for (let i = fromColumn + 1; i < toColumn; i++) {
    if (
      currentBoardCharacters[current.row][i].type ===
      CharacterTypeEnum.Character
    ) {
      return CAN_NOT_MOVE;
    }
  }
  return CAN_MOVE;
};
