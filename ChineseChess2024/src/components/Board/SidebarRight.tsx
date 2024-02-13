import React from 'react';
import {View} from 'react-native';
import {CHARACTER_SIZE} from '../../constants/theme';
import {JustifyContent} from '../../enum/justifyContent';
import HeavyVertical from '../Drawing/HeavyVertical';

export default function SidebarRight(): React.JSX.Element {
  return (
    <View style={{width: CHARACTER_SIZE, backgroundColor: 'yellow'}}>
      <HeavyVertical align={JustifyContent.flexEnd} />
      <HeavyVertical align={JustifyContent.flexEnd} />
      <HeavyVertical align={JustifyContent.flexEnd} />
      <HeavyVertical align={JustifyContent.flexEnd} />
      <HeavyVertical align={JustifyContent.flexEnd} />
      <HeavyVertical align={JustifyContent.flexEnd} />
      <HeavyVertical align={JustifyContent.flexEnd} />
      <HeavyVertical align={JustifyContent.flexEnd} />
      <HeavyVertical align={JustifyContent.flexEnd} />
      <HeavyVertical align={JustifyContent.flexEnd} />
    </View>
  );
}
