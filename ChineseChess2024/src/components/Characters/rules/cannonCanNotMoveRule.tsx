import {CharacterTypeEnum} from '../../../enum/character';

import {MovingCharacterType} from '../../../types/characterType';
import {CAN_MOVE, CAN_NOT_MOVE} from './ruleEnum';

export const cannonCanNotMoveRule = (
  previous: MovingCharacterType,
  current: MovingCharacterType,
  currentBoardCharacters: any,
) => {
  const previousRowNumber = previous.row.charCodeAt(0);
  const currentRowNumber = current.row.charCodeAt(0);
  const columnDiff = Math.abs(previous.column - current.column);

  if (columnDiff === 0) {
    const fromRow = Math.min(previousRowNumber, currentRowNumber);
    const toRow = Math.max(previousRowNumber, currentRowNumber);
    let count = 0;
    for (let i = fromRow + 1; i < toRow; i++) {
      if (
        currentBoardCharacters[String.fromCharCode(i)][current.column].type ===
        CharacterTypeEnum.Character
      ) {
        count++;
      }
    }
    if (
      count > 1 ||
      (count === 1 && current.character.type !== CharacterTypeEnum.Character) ||
      (count === 0 && current.character.type === CharacterTypeEnum.Character)
    ) {
      return CAN_NOT_MOVE;
    }
    return CAN_MOVE;
  }

  const rowDiff = Math.abs(previousRowNumber - currentRowNumber);
  if (rowDiff === 0) {
    const fromColumn = Math.min(previous.column, current.column);
    const toColumn = Math.max(previous.column, current.column);
    let count = 0;
    for (let i = fromColumn + 1; i < toColumn; i++) {
      if (
        currentBoardCharacters[current.row][i].type ===
        CharacterTypeEnum.Character
      ) {
        count++;
      }
    }
    if (
      count > 1 ||
      (count === 1 && current.character.type !== CharacterTypeEnum.Character) ||
      (count === 0 && current.character.type === CharacterTypeEnum.Character)
    ) {
      return CAN_NOT_MOVE;
    }
    return CAN_MOVE;
  }

  return CAN_NOT_MOVE;
};
