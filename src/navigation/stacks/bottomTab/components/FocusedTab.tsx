import React from 'react';
import {View, StyleSheet} from 'react-native';

type PropTypes = {
  children: React.ReactNode;
  focused: boolean;
};

const FocusedTab = ({children, focused}: PropTypes) => {
  return (
    <View style={[styles.tabItem, focused && styles.focusedTabItem]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  focusedTabItem: {
    borderTopWidth: 5,
    borderTopColor: '#636B2F',
    marginBottom: 3,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: 60,
  },
});

export default FocusedTab;
