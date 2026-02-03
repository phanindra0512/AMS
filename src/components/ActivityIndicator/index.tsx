import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
  View,
} from 'react-native';

const ActivityIndicator: React.FunctionComponent<
  ActivityIndicatorProps
> = () => {
  return (
    <View
      style={{
        width: 70,
        height: 70,
        backgroundColor: '#636b2f',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <RNActivityIndicator size={'large'} color={'#FFF'} />
    </View>
  );
};

export default ActivityIndicator;
