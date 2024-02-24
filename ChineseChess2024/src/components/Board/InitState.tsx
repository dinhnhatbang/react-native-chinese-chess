import React from 'react';
import {CharacterEnum, CharacterTypeEnum} from '../../enum/character';

import {Color} from '../../enum/color';
import {CharacterType} from '../../types/characterType';
import Cannon from '../Characters/Cannon';
import Chariot from '../Characters/Chariot';
import Elephant from '../Characters/Elephant';
import General from '../Characters/General';
import Horse from '../Characters/Horse';
import Madarin from '../Characters/Madarin';
import Solider from '../Characters/Solider';
import LightDownAndHorizontal from '../Drawing/LightDownAndHorizontal';
import LightUpAndHorizontal from '../Drawing/LightUpAndHorizontal';
import LightVerticalAndRight from '../Drawing/LightVericalAndRight';
import LightVerticalAndHorizontal from '../Drawing/LightVerticalAndHorizontal';
import LightVerticalAndHorizontalAndCross from '../Drawing/LightVerticalAndHorizontalAndCross';
import LightVerticalAndLeft from '../Drawing/LightVerticalAndLeft';

export const INIT_STATE = {
  J: [
    {
      name: CharacterEnum.Chariot,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.Horse,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.Elephant,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.Madarin,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.General,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.Madarin,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.Elephant,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.Horse,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.Chariot,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
  ],
  I: [
    {
      name: CharacterEnum.LightVerticalAndRight,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,

    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontalAndCross,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndLeft,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
  ],
  H: [
    {
      name: CharacterEnum.LightVerticalAndRight,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.Cannon,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.Cannon,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndLeft,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
  ],
  G: [
    {
      name: CharacterEnum.Solider,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.Solider,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.Solider,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.Solider,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.Solider,
      color: Color.Black,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
  ],
  F: [
    {
      name: CharacterEnum.LightVerticalAndRight,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightUpAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightUpAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightUpAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightUpAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightUpAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightUpAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightUpAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndLeft,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
  ],
  E: [
    {
      name: CharacterEnum.LightVerticalAndRight,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightDownAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightDownAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightDownAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightDownAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightDownAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightDownAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightDownAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndLeft,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
  ],
  D: [
    {
      name: CharacterEnum.Solider,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.Solider,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.Solider,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.Solider,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.Solider,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
  ],
  C: [
    {
      name: CharacterEnum.LightVerticalAndRight,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.Cannon,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.Cannon,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndLeft,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
  ],
  B: [
    {
      name: CharacterEnum.LightVerticalAndRight,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontalAndCross,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndHorizontal,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
    {
      name: CharacterEnum.LightVerticalAndLeft,
      color: Color.Black,
      type: CharacterTypeEnum.Drawing,
    } as CharacterType,
  ],
  A: [
    {
      name: CharacterEnum.Chariot,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.Horse,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.Elephant,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.Madarin,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.General,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.Madarin,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.Elephant,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.Horse,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
    {
      name: CharacterEnum.Chariot,
      color: Color.Red,
      type: CharacterTypeEnum.Character,
    } as CharacterType,
  ],
};
