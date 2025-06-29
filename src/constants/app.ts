import { Platform } from 'react-native';

const IS_IOS: boolean = Platform.OS === 'ios';
const IS_ANDROID: boolean = Platform.OS === 'android';

export { IS_IOS, IS_ANDROID };
