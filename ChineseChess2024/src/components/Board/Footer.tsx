import React from 'react';
import {View} from 'react-native';
import {JustifyContent} from '../../enum/justifyContent';
import HeavyHorizontal from '../Drawing/HeavyHorizontal';
import HeavyUpAndLeft from '../Drawing/HeavyUpAndLeft';
import HeavyUpAndRight from '../Drawing/HeavyUpAndRight';

export default function Footer(): React.JSX.Element {
  return (
    <View style={{flexDirection: 'row', backgroundColor: 'blue'}}>
      <HeavyUpAndRight />
      <HeavyHorizontal align={JustifyContent.flexEnd} />
      <HeavyHorizontal align={JustifyContent.flexEnd} />
      <HeavyHorizontal align={JustifyContent.flexEnd} />
      <HeavyHorizontal align={JustifyContent.flexEnd} />
      <HeavyHorizontal align={JustifyContent.flexEnd} />
      <HeavyHorizontal align={JustifyContent.flexEnd} />
      <HeavyHorizontal align={JustifyContent.flexEnd} />
      <HeavyHorizontal align={JustifyContent.flexEnd} />
      <HeavyHorizontal align={JustifyContent.flexEnd} />
      <HeavyUpAndLeft />
    </View>
  );
}
