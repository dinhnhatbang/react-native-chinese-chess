import React from 'react';
import {View, TextProps} from 'react-native';

const CHARACTER_SIZE = 32;
const BOARD_WIDTH = CHARACTER_SIZE * 12;
const CHARACTER_THIN = CHARACTER_SIZE / 4;
const CHARACTER_COLOR = 'black';

enum JustifyContent {
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
}

interface HeavyHorizontal extends TextProps {
  justifyContent?: JustifyContent;
}

export default function Board(): React.JSX.Element {
  const HeavyHorizontal = (prop: HeavyHorizontal) => {
    return (
      <View
        style={{
          width: CHARACTER_SIZE,
          height: CHARACTER_SIZE,
          justifyContent: prop.justifyContent,
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

  const HeavyVertical = () => {
    return (
      <View
        style={{
          width: CHARACTER_SIZE,
          height: CHARACTER_SIZE,
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
          alignItems: 'flex-end',
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

  const Header = () => {
    return (
      <View style={{flexDirection: 'row', backgroundColor: 'green'}}>
        <HeavyDownAndRight />
        <HeavyHorizontal justifyContent={JustifyContent.flexStart} />
        <HeavyHorizontal justifyContent={JustifyContent.flexStart} />
        <HeavyHorizontal justifyContent={JustifyContent.flexStart} />
        <HeavyHorizontal justifyContent={JustifyContent.flexStart} />
        <HeavyHorizontal justifyContent={JustifyContent.flexStart} />
        <HeavyHorizontal justifyContent={JustifyContent.flexStart} />
        <HeavyHorizontal justifyContent={JustifyContent.flexStart} />
        <HeavyHorizontal justifyContent={JustifyContent.flexStart} />
        <HeavyHorizontal justifyContent={JustifyContent.flexStart} />
        <HeavyDownAndLeft />
      </View>
    );
  };

  const Left = () => {
    return (
      <View style={{width: CHARACTER_SIZE}}>
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
      </View>
    );
  };

  const Right = () => {
    return (
      <View style={{width: CHARACTER_SIZE, backgroundColor: 'yellow'}}>
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
        <HeavyVertical />
      </View>
    );
  };

  const Footer = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <HeavyUpAndRight />
        <View style={{flexDirection: 'row'}}>
          <HeavyHorizontal justifyContent={JustifyContent.flexEnd} />
          <HeavyHorizontal justifyContent={JustifyContent.flexEnd} />
          <HeavyHorizontal justifyContent={JustifyContent.flexEnd} />
          <HeavyHorizontal justifyContent={JustifyContent.flexEnd} />
          <HeavyHorizontal justifyContent={JustifyContent.flexEnd} />
          <HeavyHorizontal justifyContent={JustifyContent.flexEnd} />
          <HeavyHorizontal justifyContent={JustifyContent.flexEnd} />
          <HeavyHorizontal justifyContent={JustifyContent.flexEnd} />
          <HeavyHorizontal justifyContent={JustifyContent.flexEnd} />
        </View>
        <HeavyUpAndLeft />
      </View>
    );
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <View
        style={{
          width: BOARD_WIDTH,
        }}>
        <Header />
        <View
          style={{
            width: BOARD_WIDTH,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Left />
          <Right />
        </View>
        <Footer />
      </View>
    </View>
  );
}
