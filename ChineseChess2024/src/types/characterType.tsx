import {CharacterEnum} from '../enum/character';
import {Color} from '../enum/color';

export type CharacterType = {
  name: CharacterEnum;
  color: Color;
  type: string;
};

export type MovingCharacterType = {
  character: CharacterType;
  row: string;
  column: number;
};
