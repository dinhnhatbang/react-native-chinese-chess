import {CharacterTypeEnum} from '../../../enum/character';
import {Color} from '../../../enum/color';
import {MovingCharacterType} from '../../../types/characterType';
import {CAN_MOVE, CAN_NOT_MOVE} from './ruleEnum';

export const mandarinCanNotMoveRule = (
  previous: MovingCharacterType,
  current: MovingCharacterType,
  currentBoardCharacters: any,
) => {
  const previousRowNumber = previous.row.charCodeAt(0);
  const currentRowNumber = current.row.charCodeAt(0);
  const columnDiff = Math.abs(previous.column - current.column);
  const rowDiff = Math.abs(previousRowNumber - currentRowNumber);
  if (columnDiff !== 1 || rowDiff !== 1) {
    return CAN_NOT_MOVE;
  }
  if (
    previous.character.color === Color.Black &&
    current.row.charCodeAt(0) < 69
  ) {
    return CAN_NOT_MOVE;
  }
  if (
    previous.character.color === Color.Red &&
    current.row.charCodeAt(0) > 70
  ) {
    return CAN_NOT_MOVE;
  }
  return CAN_MOVE;
};
