import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';

import {Home, Profile, ServiceHub} from '../../../screens/main';
import FocusedTab from './components/FocusedTab';
import TabBarIcon from './components/TabBarIcon';
import {screenOptions} from './constants';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const tabBarStyle = {minHeight: Platform.OS === 'ios' ? 90 : 65};

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: props => (
            <FocusedTab {...props}>
              <TabBarIcon {...props} icon={'Home'} label={'Home'} />
            </FocusedTab>
          ),
          tabBarStyle,
        }}
      />

      <Tab.Screen
        name="ServiceHub"
        component={ServiceHub}
        options={{
          tabBarIcon: props => (
            <FocusedTab {...props}>
              <TabBarIcon {...props} icon={'ServiceHub'} label={'ServiceHub'} />
            </FocusedTab>
          ),
          tabBarStyle,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: props => (
            <FocusedTab {...props}>
              <TabBarIcon {...props} icon={'Profile'} label={'Profile'} />
            </FocusedTab>
          ),
          tabBarStyle,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
