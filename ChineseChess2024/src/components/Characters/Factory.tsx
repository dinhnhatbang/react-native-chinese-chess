import React from 'react';
import {CharacterEnum} from '../../enum/character';
import {CharacterType} from '../../types/characterType';
import LightVerticalAndRight from '../Drawing/LightVericalAndRight';
import LightVerticalAndHorizontal from '../Drawing/LightVerticalAndHorizontal';
import LightVerticalAndHorizontalAndCross from '../Drawing/LightVerticalAndHorizontalAndCross';
import LightVerticalAndLeft from '../Drawing/LightVerticalAndLeft';
import LightDownAndRight from '../Drawing/LightDownAndRight';
import LightDownAndHorizontal from '../Drawing/LightDownAndHorizontal';
import LightDownAndLeft from '../Drawing/LightDownAndLeft';
import LightUpAndHorizontal from '../Drawing/LightUpAndHorizontal';
import Cannon from '../Characters/Cannon';
import Chariot from '../Characters/Chariot';
import Solider from '../Characters/Solider';
import General from '../Characters/General';
import Horse from '../Characters/Horse';
import Elephant from '../Characters/Elephant';
import Madarin from '../Characters/Madarin';
import LightUpAndRight from '../Drawing/LightUpAndRight';
import LightUpAndLeft from '../Drawing/LightUpAndLeft';

export const factory = (character: CharacterType) => {
  switch (character.name) {
    case CharacterEnum.Cannon:
      return <Cannon color={character.color} />;
    case CharacterEnum.Chariot:
      return <Chariot color={character.color} />;
    case CharacterEnum.Solider:
      return <Solider color={character.color} />;
    case CharacterEnum.General:
      return <General color={character.color} />;
    case CharacterEnum.Horse:
      return <Horse color={character.color} />;
    case CharacterEnum.Elephant:
      return <Elephant color={character.color} />;
    case CharacterEnum.Madarin:
      return <Madarin color={character.color} />;
    case CharacterEnum.LightVerticalAndRight:
      return <LightVerticalAndRight />;
    case CharacterEnum.LightVerticalAndHorizontal:
      return <LightVerticalAndHorizontal />;
    case CharacterEnum.LightVerticalAndHorizontalAndCross:
      return <LightVerticalAndHorizontalAndCross />;
    case CharacterEnum.LightVerticalAndLeft:
      return <LightVerticalAndLeft />;
    case CharacterEnum.LightDownAndRight:
      return <LightDownAndRight />;
    case CharacterEnum.LightUpAndRight:
      return <LightUpAndRight />;
    case CharacterEnum.LightUpAndLeft:
      return <LightUpAndLeft />;
    case CharacterEnum.LightDownAndLeft:
      return <LightDownAndLeft />;
    case CharacterEnum.LightDownAndHorizontal:
      return <LightDownAndHorizontal />;
    case CharacterEnum.LightUpAndHorizontal:
      return <LightUpAndHorizontal />;
  }
};
