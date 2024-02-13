import {Dimensions} from 'react-native';

const NUMBER_COLUMNS = 12;

export const WINDOW_WIDTH_ORIGINAL = Dimensions.get('window').width;
export const WINDOW_HEIGHT_ORIGINAL = Dimensions.get('window').height;

let windowWidth = WINDOW_WIDTH_ORIGINAL;
let windowHeight = WINDOW_HEIGHT_ORIGINAL;

if (windowHeight < windowWidth) {
  windowWidth = windowHeight;
}

export const WINDOW_WIDTH = windowWidth;
export const WINDOW_HEIGHT = windowHeight;

export const FONT_SIZE = 30;
export const FONT_FAMILY = 'BabelStoneXiangqiColour';
export const CHARACTER_SIZE = WINDOW_WIDTH / NUMBER_COLUMNS;
export const BOARD_WIDTH = CHARACTER_SIZE * 10;
export const CHARACTER_HEAVY = CHARACTER_SIZE / 10;
export const CHARACTER_LIGHT = CHARACTER_SIZE / 10 / 2;
export const CHARACTER_COLOR = 'black';
