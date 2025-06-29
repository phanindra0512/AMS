import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const DEFAULT_HIT_SLOP = { top: 10, bottom: 10, left: 10, right: 10 };

export { SCREEN_WIDTH, SCREEN_HEIGHT, DEFAULT_HIT_SLOP };
