import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import {Home, Transactions, Profile, ServiceHub} from '../../../../assets/svg';
import Octicons from 'react-native-vector-icons';
import {icons} from '../constants';

type PropTypes = {
  icon: keyof typeof icons;
  focused: boolean;
  color: string;
  label: string;
  size: number;
};

const SCREEN_WIDTH = Dimensions.get('window').width;
const TAB_COUNT = 2;
const MIN_TAB_WIDTH = SCREEN_WIDTH / TAB_COUNT;

const TabBarIcon = ({icon, focused, color, size, label}: PropTypes) => {
  const IconComponent = focused ? icons[icon].filled : icons[icon].outlined;
  return (
    <View style={styles.container}>
      <IconComponent fill={color} width={size} height={size} />
      <Text
        style={[
          styles.label,
          focused ? styles.focusedText : styles.defaultText,
        ]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120, // use MIN_TAB_WIDTH for dynamic value
    height: 50,
    flexGrow: 1,
    marginTop: 20,
  },
  label: {
    fontSize: 12,
    marginTop: 2,
    fontFamily: 'JosefinSans-SemiBold',
  },
  focusedText: {
    color: '#636B2F',
  },
  defaultText: {
    color: '#999',
  },
});

export default TabBarIcon;
