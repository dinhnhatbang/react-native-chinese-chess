import {CharacterEnum} from '../../../enum/character';
import {MovingCharacterType} from '../../../types/characterType';
import {cannonCanNotMoveRule} from './cannonCanNotMoveRule';
import {chariotCanNotMoveRule} from './chariotCanNotMoveRule';
import {eatingSameColor} from './eatingSameColorRule';
import {CAN_MOVE, CAN_NOT_MOVE} from './ruleEnum';
import {soliderCanNotMoveRule} from './soliderRule';

export const canNotMove = (
  previous: MovingCharacterType,
  current: MovingCharacterType,
  currentBoardCharacters: any,
) => {
  if (eatingSameColor(previous, current)) {
    return CAN_NOT_MOVE;
  }
  if (previous.character.name === CharacterEnum.Solider) {
    return soliderCanNotMoveRule(previous, current, currentBoardCharacters);
  }
  if (previous.character.name === CharacterEnum.Cannon) {
    return cannonCanNotMoveRule(previous, current, currentBoardCharacters);
  }
  if (previous.character.name === CharacterEnum.Chariot) {
    return chariotCanNotMoveRule(previous, current, currentBoardCharacters);
  }

  return CAN_MOVE;
};
