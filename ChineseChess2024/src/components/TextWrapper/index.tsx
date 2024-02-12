import React, {ReactNode} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/theme';

interface TextWrapperProps extends TextProps {
  children: ReactNode;
  style?: TextStyle;
}

const TextWrapper: React.FC<TextWrapperProps> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <Text
      {...rest}
      style={[
        {fontFamily: FONT_FAMILY, fontSize: FONT_SIZE, lineHeight: FONT_SIZE},
        ,
        style,
      ]}>
      {children}
    </Text>
  );
};

export default TextWrapper;
