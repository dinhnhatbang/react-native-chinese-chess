import React from 'react';
import {Text, TextProps, View} from 'react-native';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/theme';
import {Color} from '../../enum/color';

interface ChracterProps extends TextProps {
  color?: Color;
  redCharacter: number;
  blackCharacter: number;
}

export default function CharacterWrapper(
  props: ChracterProps,
): React.JSX.Element {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: FONT_SIZE,
          transform:
            props.color === Color.Black
              ? [{scaleY: -1}, {scaleX: -1}]
              : [{scaleY: 1}, {scaleX: 1}],
        }}>
        {String.fromCodePoint(
          props.color === Color.Red ? props.redCharacter : props.blackCharacter,
        )}
      </Text>
    </View>
  );
}
