import React, {useState, memo} from 'react';
import {View} from 'react-native';
import {
  BOARD_WIDTH,
  WINDOW_HEIGHT_ORIGINAL,
  WINDOW_WIDTH_ORIGINAL,
} from '../../constants/theme';
import {CharacterType} from '../../types/characterType';
import CharacterFactory from '../Characters/CharacterFactory';
import {INIT_STATE} from './InitState';

const CharacterFactoryMemo = memo(CharacterFactory);

export default function Board(): React.JSX.Element {
  const [boardCharacters, setBoardCharacters] = useState(INIT_STATE);
  const [previousSelected, setPreviousSelected] = useState(undefined);

  const renderCharacter = (
    key: string,
    index: number,
    chacracter: CharacterType,
  ) => {
    return (
      <CharacterFactoryMemo
        key={key + index}
        name={key + index}
        row={key}
        column={index}
        character={chacracter}
        setBoardCharacters={setBoardCharacters}
        boardCharacters={boardCharacters}
        setPreviousSelected={setPreviousSelected}
        previousSelected={previousSelected}
      />
    );
  };

  const renderBoard = () => {
    return (
      <View style={{flexDirection: 'column'}}>
        {Object.keys(boardCharacters).map((key: string) => (
          <View style={{flexDirection: 'row'}} key={key}>
            {key in boardCharacters &&
              boardCharacters[key as keyof typeof boardCharacters].map(
                (value: CharacterType, index: number) =>
                  renderCharacter(key, index, value),
              )}
          </View>
        ))}
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
        backgroundColor: '#302813',
      }}>
      <View
        style={{
          width: BOARD_WIDTH,
          height: BOARD_WIDTH + 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FAF3CF',
          borderBlockColor: 'black',
        }}>
        <View style={{flexDirection: 'row'}}>{renderBoard()}</View>
      </View>
    </View>
  );
}
