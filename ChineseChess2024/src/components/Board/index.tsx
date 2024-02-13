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
import LightUpAndRight from '../Drawing/LightUpAndRight';
import LightVerticalAndRight from '../Drawing/LightVericalAndRight';
import LightVerticalAndHorizontal from '../Drawing/LightVerticalAndHorizontal';
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
              <Character name={'I3'} />
              <Character name={'I4'} />
              <Character name={'I5'} />
              <Character name={'I6'} />
              <Character name={'I7'} />
              <Character name={'I8'} />
              <Character name={'I9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Character name={'H1'} />
              <Character name={'H2'} />
              <Character name={'H3'} />
              <Character name={'H4'} />
              <Character name={'H5'} />
              <Character name={'H6'} />
              <Character name={'H7'} />
              <Character name={'H8'} />
              <Character name={'H9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Character name={'G1'} />
              <Character name={'G2'} />
              <Character name={'G3'} />
              <Character name={'G4'} />
              <Character name={'G5'} />
              <Character name={'G6'} />
              <Character name={'G7'} />
              <Character name={'G8'} />
              <Character name={'G9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Character name={'F1'} />
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
              <Character name={'E1'} />
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
              <Character name={'D1'} />
              <Character name={'D2'} />
              <Character name={'D3'} />
              <Character name={'D4'} />
              <Character name={'D5'} />
              <Character name={'D6'} />
              <Character name={'D7'} />
              <Character name={'D8'} />
              <Character name={'D9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Character name={'C1'} />
              <Character name={'C2'} />
              <Character name={'C3'} />
              <Character name={'C4'} />
              <Character name={'C5'} />
              <Character name={'C6'} />
              <Character name={'C7'} />
              <Character name={'C8'} />
              <Character name={'C9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Character name={'B1'} />
              <Character name={'B2'} />
              <Character name={'B3'} />
              <Character name={'B4'} />
              <Character name={'B5'} />
              <Character name={'B6'} />
              <Character name={'B7'} />
              <Character name={'B8'} />
              <Character name={'B9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Character
                name={'J1'}
                character={<Chariot color={Color.Red} />}
              />
              <Character name={'J2'} character={<Horse color={Color.Red} />} />
              <Character
                name={'J3'}
                character={<Elephant color={Color.Red} />}
              />
              <Character
                name={'J4'}
                character={<Madarin color={Color.Red} />}
              />
              <Character
                name={'J5'}
                character={<General color={Color.Red} />}
              />
              <Character
                name={'J6'}
                character={<Madarin color={Color.Red} />}
              />
              <Character
                name={'J7'}
                character={<Elephant color={Color.Red} />}
              />
              <Character name={'J8'} character={<Horse color={Color.Red} />} />
              <Character
                name={'J9'}
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
