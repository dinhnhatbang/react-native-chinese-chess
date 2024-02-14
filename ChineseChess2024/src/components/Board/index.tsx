import React from 'react';
import {View} from 'react-native';
import {
  BOARD_WIDTH,
  WINDOW_HEIGHT_ORIGINAL,
  WINDOW_WIDTH_ORIGINAL,
} from '../../constants/theme';
import Character from '../Characters/Character';
import Footer from './Footer';
import Header from './Header';
import {INIT_STATE} from './InitState';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';

export default function Board(): React.JSX.Element {
  const renderCharacter = (
    key: string,
    index: number,
    chacracter: React.JSX.Element,
  ) => {
    return <Character name={key + index} character={chacracter} />;
  };

  const renderBoard = () => {
    return (
      <View style={{flexDirection: 'column'}}>
        <View>
          {Object.keys(INIT_STATE).map((key: string) => (
            <View style={{flexDirection: 'row'}}>
              {key in INIT_STATE &&
                INIT_STATE[key as keyof typeof INIT_STATE].map(
                  (value: React.JSX.Element, index: number) =>
                    renderCharacter(key, index, value),
                )}
            </View>
          ))}
        </View>
      </View>
    );
  };

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
          {renderBoard()}
          <SidebarRight />
        </View>
        <Footer />
      </View>
    </View>
  );
}
