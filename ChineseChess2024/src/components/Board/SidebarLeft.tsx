import React from 'react';
import {View} from 'react-native';
import {CHARACTER_SIZE} from '../../constants/theme';
import {JustifyContent} from '../../enum/justifyContent';
import HeavyVertical from '../Drawing/HeavyVertical';

export default function SidebarLeft(): React.JSX.Element {
  return (
    <View style={{width: CHARACTER_SIZE, justifyContent: 'flex-start'}}>
      <HeavyVertical align={JustifyContent.flexStart} />
      <HeavyVertical align={JustifyContent.flexStart} />
      <HeavyVertical align={JustifyContent.flexStart} />
      <HeavyVertical align={JustifyContent.flexStart} />
      <HeavyVertical align={JustifyContent.flexStart} />
      <HeavyVertical align={JustifyContent.flexStart} />
      <HeavyVertical align={JustifyContent.flexStart} />
      <HeavyVertical align={JustifyContent.flexStart} />
      <HeavyVertical align={JustifyContent.flexStart} />
      <HeavyVertical align={JustifyContent.flexStart} />
    </View>
  );
}
