import React from 'react';
import {View} from 'react-native';
import {
  BOARD_WIDTH,
  WINDOW_HEIGHT_ORIGINAL,
  WINDOW_WIDTH_ORIGINAL,
} from '../../constants/theme';
import {Color} from '../../enum/color';
import Cannon from '../Characters/Cannon';
import Character from '../Characters/Character';
import Chariot from '../Characters/Chariot';
import Elephant from '../Characters/Elephant';
import General from '../Characters/General';
import Horse from '../Characters/Horse';
import Madarin from '../Characters/Madarin';
import Solider from '../Characters/Solider';
import LightVerticalAndRight from '../Drawing/LightVericalAndRight';
import LightVerticalAndHorizontal from '../Drawing/LightVerticalAndHorizontal';
import LightVerticalAndLeft from '../Drawing/LightVerticalAndLeft';
import Footer from './Footer';
import Header from './Header';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';

export default function Board(): React.JSX.Element {
  return (
    <View
      style={{
        height: WINDOW_HEIGHT_ORIGINAL,
        width: WINDOW_WIDTH_ORIGINAL,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: BOARD_WIDTH,
          height: BOARD_WIDTH,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Header />
        <View style={{flexDirection: 'row'}}>
          <SidebarLeft />
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <Character
                name={'J1'}
                character={<Chariot color={Color.Black} />}
              />
              <Character
                name={'J2'}
                character={<Horse color={Color.Black} />}
              />
              <Character
                name={'J3'}
                character={<Elephant color={Color.Black} />}
              />
              <Character
                name={'J4'}
                character={<Madarin color={Color.Black} />}
              />
              <Character
                name={'J5'}
                character={<General color={Color.Black} />}
              />
              <Character
                name={'J6'}
                character={<Madarin color={Color.Black} />}
              />
              <Character
                name={'J7'}
                character={<Elephant color={Color.Black} />}
              />
              <Character
                name={'J8'}
                character={<Horse color={Color.Black} />}
              />
              <Character
                name={'J9'}
                character={<Chariot color={Color.Black} />}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Character name={'I1'} character={<LightVerticalAndRight />} />
              <Character
                name={'I2'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'I3'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'I4'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'I5'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'I6'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'I7'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'I8'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character name={'I9'} character={<LightVerticalAndLeft />} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Character name={'H1'} character={<LightVerticalAndRight />} />
              <Character
                name={'H2'}
                character={<Cannon color={Color.Black} />}
              />
              <Character
                name={'H3'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'H4'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'H5'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'H6'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'H7'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'H8'}
                character={<Cannon color={Color.Black} />}
              />
              <Character name={'H9'} character={<LightVerticalAndLeft />} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Character
                name={'G1'}
                character={<Solider color={Color.Black} />}
              />
              <Character
                name={'G2'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'G3'}
                character={<Solider color={Color.Black} />}
              />
              <Character
                name={'G4'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'G5'}
                character={<Solider color={Color.Black} />}
              />
              <Character
                name={'G6'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'G7'}
                character={<Solider color={Color.Black} />}
              />
              <Character
                name={'G8'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'G9'}
                character={<Solider color={Color.Black} />}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Character name={'F1'} character={<LightVerticalAndRight />} />
              <Character name={'F2'} />
              <Character name={'F3'} />
              <Character name={'F4'} />
              <Character name={'F5'} />
              <Character name={'F6'} />
              <Character name={'F7'} />
              <Character name={'F8'} />
              <Character name={'F9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Character name={'E1'} character={<LightVerticalAndRight />} />
              <Character name={'E2'} />
              <Character name={'E3'} />
              <Character name={'E4'} />
              <Character name={'E5'} />
              <Character name={'E6'} />
              <Character name={'E7'} />
              <Character name={'E8'} />
              <Character name={'E9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Character
                name={'D1'}
                character={<Solider color={Color.Red} />}
              />
              <Character
                name={'D2'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'D3'}
                character={<Solider color={Color.Red} />}
              />
              <Character
                name={'D4'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'D5'}
                character={<Solider color={Color.Red} />}
              />
              <Character
                name={'D6'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'D7'}
                character={<Solider color={Color.Red} />}
              />
              <Character
                name={'D8'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'D9'}
                character={<Solider color={Color.Red} />}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Character name={'C1'} character={<LightVerticalAndRight />} />
              <Character name={'C2'} character={<Cannon color={Color.Red} />} />
              <Character
                name={'C3'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'C4'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'C5'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'C6'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'C7'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character name={'C8'} character={<Cannon color={Color.Red} />} />
              <Character name={'C9'} character={<LightVerticalAndLeft />} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Character name={'B1'} character={<LightVerticalAndRight />} />
              <Character
                name={'B2'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'B3'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'B4'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'B5'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'B6'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'B7'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character
                name={'B8'}
                character={<LightVerticalAndHorizontal />}
              />
              <Character name={'B9'} character={<LightVerticalAndLeft />} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Character
                name={'A1'}
                character={<Chariot color={Color.Red} />}
              />
              <Character name={'A2'} character={<Horse color={Color.Red} />} />
              <Character
                name={'A3'}
                character={<Elephant color={Color.Red} />}
              />
              <Character
                name={'A4'}
                character={<Madarin color={Color.Red} />}
              />
              <Character
                name={'A5'}
                character={<General color={Color.Red} />}
              />
              <Character
                name={'A6'}
                character={<Madarin color={Color.Red} />}
              />
              <Character
                name={'A7'}
                character={<Elephant color={Color.Red} />}
              />
              <Character name={'A8'} character={<Horse color={Color.Red} />} />
              <Character
                name={'A9'}
                character={<Chariot color={Color.Red} />}
              />
            </View>
          </View>
          <SidebarRight />
        </View>
        <Footer />
      </View>
    </View>
  );
}
