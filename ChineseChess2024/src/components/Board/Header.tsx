import React from 'react';
import {View} from 'react-native';
import {JustifyContent} from '../../enum/justifyContent';
import HeavyDownAndLeft from '../Drawing/HeavyDownAndLeft';
import HeavyDownAndRight from '../Drawing/HeavyDownAndRight';
import HeavyHorizontal from '../Drawing/HeavyHorizontal';

export default function Header(): React.JSX.Element {
  return (
    <View style={{flexDirection: 'row', backgroundColor: 'green'}}>
      <HeavyDownAndRight />
      <HeavyHorizontal align={JustifyContent.flexStart} />
      <HeavyHorizontal align={JustifyContent.flexStart} />
      <HeavyHorizontal align={JustifyContent.flexStart} />
      <HeavyHorizontal align={JustifyContent.flexStart} />
      <HeavyHorizontal align={JustifyContent.flexStart} />
      <HeavyHorizontal align={JustifyContent.flexStart} />
      <HeavyHorizontal align={JustifyContent.flexStart} />
      <HeavyHorizontal align={JustifyContent.flexStart} />
      <HeavyHorizontal align={JustifyContent.flexStart} />
      <HeavyDownAndLeft />
    </View>
  );
}
