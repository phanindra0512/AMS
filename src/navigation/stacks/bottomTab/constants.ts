import {StyleSheet} from 'react-native';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

import {IS_IOS} from '../../../constants/app';

import {SCREEN_HEIGHT} from '../../../constants/dimensions';

const percentage = IS_IOS ? 9 : 12;

const styles = StyleSheet.create({
  tabBar: {
    height: SCREEN_HEIGHT / percentage,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
    marginHorizontal: 10,
  },
});

export const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#636B2F',
  tabBarInactiveTintColor: '#CCC',
  tabBarStyle: styles.tabBar,
  tabBarAllowFontScaling: false,
};
