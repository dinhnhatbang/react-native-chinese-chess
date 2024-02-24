import {CharacterEnum} from '../enum/character';
import {Color} from '../enum/color';

export type CharacterType = {
  name: CharacterEnum;
  color: Color;
};

export type MovingCharacterType = {
  name: CharacterEnum;
  color: Color;
  row: string;
  column: number;
};
