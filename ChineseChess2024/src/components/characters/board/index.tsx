import React from 'react';
import {View, TextProps, Text, TouchableOpacity} from 'react-native';

const CHARACTER_SIZE = 32;
const BOARD_WIDTH = CHARACTER_SIZE * 12;
const CHARACTER_THIN = CHARACTER_SIZE / 4;
const CHARACTER_COLOR = 'black';

enum JustifyContent {
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
}

interface PositionProp extends TextProps {
  align?: JustifyContent;
}

interface Position extends TextProps {
  name: string;
}

export default function Board(): React.JSX.Element {
  const HeavyHorizontal = (prop: PositionProp) => {
    return (
      <View
        style={{
          width: CHARACTER_SIZE,
          height: CHARACTER_SIZE,
          justifyContent: prop.align,
        }}>
        <View
          style={{
            width: CHARACTER_SIZE,
            height: CHARACTER_THIN,
            backgroundColor: CHARACTER_COLOR,
          }}></View>
      </View>
    );
  };

  const HeavyVertical = (prop: PositionProp) => {
    return (
      <View
        style={{
          width: CHARACTER_SIZE,
          height: CHARACTER_SIZE,
          alignItems: prop.align,
          backgroundColor: 'yellow',
        }}>
        <View
          style={{
            width: CHARACTER_THIN,
            height: CHARACTER_SIZE,
            backgroundColor: CHARACTER_COLOR,
          }}></View>
      </View>
    );
  };

  const HeavyDownAndRight = () => {
    return (
      <View
        style={{
          width: CHARACTER_SIZE,
          height: CHARACTER_SIZE,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: CHARACTER_THIN,
            height: CHARACTER_SIZE,
            backgroundColor: CHARACTER_COLOR,
          }}></View>
        <View
          style={{
            width: CHARACTER_SIZE,
            height: CHARACTER_THIN,
            backgroundColor: CHARACTER_COLOR,
          }}></View>
      </View>
    );
  };

  const HeavyDownAndLeft = () => {
    return (
      <View
        style={{
          width: CHARACTER_SIZE,
          height: CHARACTER_SIZE,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            width: CHARACTER_SIZE,
            height: CHARACTER_THIN,
            backgroundColor: CHARACTER_COLOR,
          }}></View>
        <View
          style={{
            width: CHARACTER_THIN,
            height: CHARACTER_SIZE,
            backgroundColor: CHARACTER_COLOR,
          }}></View>
      </View>
    );
  };

  const HeavyUpAndRight = () => {
    return (
      <View
        style={{
          width: CHARACTER_SIZE,
          height: CHARACTER_SIZE,
          flexDirection: 'row',
          alignItems: 'flex-end',
          backgroundColor: 'yellow',
        }}>
        <View
          style={{
            width: CHARACTER_THIN,
            height: CHARACTER_SIZE,
            backgroundColor: CHARACTER_COLOR,
          }}></View>
        <View
          style={{
            width: CHARACTER_SIZE,
            height: CHARACTER_THIN,
            backgroundColor: CHARACTER_COLOR,
          }}></View>
      </View>
    );
  };

  const HeavyUpAndLeft = () => {
    return (
      <View
        style={{
          width: CHARACTER_SIZE,
          height: CHARACTER_SIZE,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            width: CHARACTER_SIZE,
            height: CHARACTER_THIN,
            backgroundColor: CHARACTER_COLOR,
            alignSelf: 'flex-end',
          }}></View>
        <View
          style={{
            width: CHARACTER_THIN,
            height: CHARACTER_SIZE,
            backgroundColor: CHARACTER_COLOR,
          }}></View>
      </View>
    );
  };

  const Header = () => {
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
  };

  const Left = () => {
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
  };

  const Right = () => {
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
  };

  const Footer = () => {
    return (
      <View style={{flexDirection: 'row'}}>
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
  };

  const Position = (prop: Position) => {
    return (
      <View
        style={{
          width: CHARACTER_SIZE,
          height: CHARACTER_SIZE,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity>
          <Text>{prop.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: BOARD_WIDTH,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'orange',
        }}>
        <Header />
        <View style={{flexDirection: 'row'}}>
          <Left />
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <Position name={'J1'} />
              <Position name={'J2'} />
              <Position name={'J3'} />
              <Position name={'J4'} />
              <Position name={'J5'} />
              <Position name={'J6'} />
              <Position name={'J7'} />
              <Position name={'J8'} />
              <Position name={'J9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Position name={'I1'} />
              <Position name={'I2'} />
              <Position name={'I3'} />
              <Position name={'I4'} />
              <Position name={'I5'} />
              <Position name={'I6'} />
              <Position name={'I7'} />
              <Position name={'I8'} />
              <Position name={'I9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Position name={'H1'} />
              <Position name={'H2'} />
              <Position name={'H3'} />
              <Position name={'H4'} />
              <Position name={'H5'} />
              <Position name={'H6'} />
              <Position name={'H7'} />
              <Position name={'H8'} />
              <Position name={'H9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Position name={'G1'} />
              <Position name={'G2'} />
              <Position name={'G3'} />
              <Position name={'G4'} />
              <Position name={'G5'} />
              <Position name={'G6'} />
              <Position name={'G7'} />
              <Position name={'G8'} />
              <Position name={'G9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Position name={'F1'} />
              <Position name={'F2'} />
              <Position name={'F3'} />
              <Position name={'F4'} />
              <Position name={'F5'} />
              <Position name={'F6'} />
              <Position name={'F7'} />
              <Position name={'F8'} />
              <Position name={'F9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Position name={'E1'} />
              <Position name={'E2'} />
              <Position name={'E3'} />
              <Position name={'E4'} />
              <Position name={'E5'} />
              <Position name={'E6'} />
              <Position name={'E7'} />
              <Position name={'E8'} />
              <Position name={'E9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Position name={'D1'} />
              <Position name={'D2'} />
              <Position name={'D3'} />
              <Position name={'D4'} />
              <Position name={'D5'} />
              <Position name={'D6'} />
              <Position name={'D7'} />
              <Position name={'D8'} />
              <Position name={'D9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Position name={'C1'} />
              <Position name={'C2'} />
              <Position name={'C3'} />
              <Position name={'C4'} />
              <Position name={'C5'} />
              <Position name={'C6'} />
              <Position name={'C7'} />
              <Position name={'C8'} />
              <Position name={'C9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Position name={'B1'} />
              <Position name={'B2'} />
              <Position name={'B3'} />
              <Position name={'B4'} />
              <Position name={'B5'} />
              <Position name={'B6'} />
              <Position name={'B7'} />
              <Position name={'B8'} />
              <Position name={'B9'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Position name={'A1'} />
              <Position name={'A2'} />
              <Position name={'A3'} />
              <Position name={'A4'} />
              <Position name={'A5'} />
              <Position name={'A6'} />
              <Position name={'A7'} />
              <Position name={'A8'} />
              <Position name={'A9'} />
            </View>
          </View>
          <Right />
        </View>
        <Footer />
      </View>
    </View>
  );
}
