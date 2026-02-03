import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ViewExpense,
  Announcement,
  CallCommittee,
  FlatDetails,
  PayMaintenance,
  ViewCollection,
  ViewReceipts,
  Notifications,
  AddExpenses,
  OwnerDetails,
  TransactionDetails,
  AddService,
} from '../../../screens/main';

import {Login, VerifyOTP} from '../../../screens/auth';
import BottomTab from '../bottomTab';
import {GlobalStore} from '../../../storage/stores';

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkTokens = async () => {
      const authToken = GlobalStore.userToken.getValue('authToken');
      console.log('authToken available in store ===> ', authToken);

      if (!authToken?.authToken) {
        setInitialRoute('Login');
      } else if (authToken?.authToken) {
        setInitialRoute('BottomTab');
      }
    };

    checkTokens();
  }, []);

  if (!initialRoute) return null;

  return (
    <MainStack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="VerifyOTP" component={VerifyOTP} />
      <MainStack.Screen name="BottomTab" component={BottomTab} />
      <MainStack.Screen name="ViewCollection" component={ViewCollection} />
      <MainStack.Screen name="ViewExpense" component={ViewExpense} />
      <MainStack.Screen name="PayMaintenance" component={PayMaintenance} />
      <MainStack.Screen name="Announcement" component={Announcement} />
      <MainStack.Screen name="ViewReceipts" component={ViewReceipts} />
      <MainStack.Screen name="FlatDetails" component={FlatDetails} />
      <MainStack.Screen name="CallCommittee" component={CallCommittee} />
      <MainStack.Screen name="Notifications" component={Notifications} />
      <MainStack.Screen name="AddExpenses" component={AddExpenses} />
      <MainStack.Screen name="OwnerDetails" component={OwnerDetails} />
      <MainStack.Screen
        name="TransactionDetails"
        component={TransactionDetails}
      />
      <MainStack.Screen name="AddService" component={AddService} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
