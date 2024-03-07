import {Dimensions} from 'react-native';

const NUMBER_COLUMNS = 10;

export const WINDOW_WIDTH_ORIGINAL = Dimensions.get('window').width;
export const WINDOW_HEIGHT_ORIGINAL = Dimensions.get('window').height;

let windowWidth = WINDOW_WIDTH_ORIGINAL;
let windowHeight = WINDOW_HEIGHT_ORIGINAL;

if (windowHeight < windowWidth) {
  windowWidth = windowHeight;
}

export const WINDOW_WIDTH = windowWidth;
export const WINDOW_HEIGHT = windowHeight;

export const BABEL_STONE_XIANQUI = 'BabelStoneXiangqi';
export const BABEL_STONE_XIANQUI_COLOUR = 'BabelStoneXiangqiColour';

export const FONT_FAMILY = BABEL_STONE_XIANQUI_COLOUR;

let characterSize = WINDOW_WIDTH / NUMBER_COLUMNS;
export const CHARACTER_SIZE = characterSize;
export const CHARACTER_SIZE_HYPOTENUSE = Math.sqrt(
  Math.pow(CHARACTER_SIZE, 2) + Math.pow(CHARACTER_SIZE, 2),
);
export const CHARACTER_SIZE_FIFTY_PERCENT = characterSize / 2;
export const CHARACTER_SIZE_HYPOTENUSE_FIFTY_PERCENT =
  CHARACTER_SIZE_HYPOTENUSE / 2;

export const FONT_SIZE = CHARACTER_SIZE;
export const BOARD_WIDTH = CHARACTER_SIZE * 10;
export const CHARACTER_HEAVY = CHARACTER_SIZE / 10;
export const CHARACTER_LIGHT = CHARACTER_SIZE / 10 / 2;

export const CHARACTER_COLOR = 'black';
