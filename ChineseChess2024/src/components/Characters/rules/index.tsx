import {CharacterEnum} from '../../../enum/character';
import {MovingCharacterType} from '../../../types/characterType';
import {cannonCanNotMoveRule} from './cannonCanNotMoveRule';
import {eatingSameColor} from './eatingSameColorRule';
import {soliderCanNotMoveRule} from './soliderRule';

export const canNotMove = (
  previous: MovingCharacterType,
  current: MovingCharacterType,
  currentBoardCharacters: any,
) => {
  if (eatingSameColor(previous, current)) {
    return true;
  }
  if (previous.character.name === CharacterEnum.Solider) {
    return soliderCanNotMoveRule(previous, current, currentBoardCharacters);
  }
  if (previous.character.name === CharacterEnum.Cannon) {
    return cannonCanNotMoveRule(previous, current, currentBoardCharacters);
  }

  return false;
};
