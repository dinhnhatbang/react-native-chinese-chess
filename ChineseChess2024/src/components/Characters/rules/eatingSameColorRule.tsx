import {CharacterTypeEnum} from '../../../enum/character';
import {MovingCharacterType} from '../../../types/characterType';

export const eatingSameColor = (
  previous: MovingCharacterType,
  current: MovingCharacterType,
) => {
  return (
    previous.character.color === current.character.color &&
    current.character.type !== CharacterTypeEnum.Drawing
  );
};
