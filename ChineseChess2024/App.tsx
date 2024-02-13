import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Board from './src/components/Board';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <Board />
    </SafeAreaView>
  );
}

export default App;
