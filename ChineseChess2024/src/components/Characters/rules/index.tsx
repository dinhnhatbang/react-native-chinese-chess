import {CharacterEnum} from '../../../enum/character';
import {MovingCharacterType} from '../../../types/characterType';
import {eatingSameColor} from './eatingSameColorRule';
import {soliderCanNotMoveRule} from './soliderRule';

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
