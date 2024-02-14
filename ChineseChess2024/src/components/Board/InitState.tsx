import React from 'react';
import {CharacterEnum} from '../../enum/character';

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
    {name: CharacterEnum.Chariot, color: Color.Black} as CharacterType,
    {name: CharacterEnum.Horse, color: Color.Black} as CharacterType,
    {name: CharacterEnum.Elephant, color: Color.Black} as CharacterType,
    {name: CharacterEnum.Madarin, color: Color.Black} as CharacterType,
    {name: CharacterEnum.General, color: Color.Black} as CharacterType,
    {name: CharacterEnum.Madarin, color: Color.Black} as CharacterType,
    {name: CharacterEnum.Elephant, color: Color.Black} as CharacterType,
    {name: CharacterEnum.Horse, color: Color.Black} as CharacterType,
    {name: CharacterEnum.Chariot, color: Color.Black} as CharacterType,
  ],
  // I: [
  //   <LightVerticalAndRight />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontalAndCross />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndLeft />,
  // ],
  // H: [
  //   <LightVerticalAndRight />,
  //   <Cannon color={Color.Black} />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <Cannon color={Color.Black} />,
  //   <LightVerticalAndLeft />,
  // ],
  // G: [
  //   <Solider color={Color.Black} />,
  //   <LightVerticalAndHorizontal />,
  //   <Solider color={Color.Black} />,
  //   <LightVerticalAndHorizontal />,
  //   <Solider color={Color.Black} />,
  //   <LightVerticalAndHorizontal />,
  //   <Solider color={Color.Black} />,
  //   <LightVerticalAndHorizontal />,
  //   <Solider color={Color.Black} />,
  // ],
  // F: [
  //   <LightVerticalAndRight />,
  //   <LightUpAndHorizontal />,
  //   <LightUpAndHorizontal />,
  //   <LightUpAndHorizontal />,
  //   <LightUpAndHorizontal />,
  //   <LightUpAndHorizontal />,
  //   <LightUpAndHorizontal />,
  //   <LightUpAndHorizontal />,
  //   <LightVerticalAndLeft />,
  // ],
  // E: [
  //   <LightVerticalAndRight />,
  //   <LightDownAndHorizontal />,
  //   <LightDownAndHorizontal />,
  //   <LightDownAndHorizontal />,
  //   <LightDownAndHorizontal />,
  //   <LightDownAndHorizontal />,
  //   <LightDownAndHorizontal />,
  //   <LightDownAndHorizontal />,
  //   <LightVerticalAndLeft />,
  // ],
  // D: [
  //   <Solider color={Color.Red} />,
  //   <LightVerticalAndHorizontal />,
  //   <Solider color={Color.Red} />,
  //   <LightVerticalAndHorizontal />,
  //   <Solider color={Color.Red} />,
  //   <LightVerticalAndHorizontal />,
  //   <Solider color={Color.Red} />,
  //   <LightVerticalAndHorizontal />,
  //   <Solider color={Color.Red} />,
  // ],
  // C: [
  //   <LightVerticalAndRight />,
  //   <Cannon color={Color.Red} />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <Cannon color={Color.Red} />,
  //   <LightVerticalAndLeft />,
  // ],
  // B: [
  //   <LightVerticalAndRight />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontalAndCross />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndHorizontal />,
  //   <LightVerticalAndLeft />,
  // ],
  // A: [
  //   <Chariot color={Color.Red} />,
  //   <Horse color={Color.Red} />,
  //   <Elephant color={Color.Red} />,
  //   <Madarin color={Color.Red} />,
  //   <General color={Color.Red} />,
  //   <Madarin color={Color.Red} />,
  //   <Elephant color={Color.Red} />,
  //   <Horse color={Color.Red} />,
  //   <Chariot color={Color.Red} />,
  // ],
};
