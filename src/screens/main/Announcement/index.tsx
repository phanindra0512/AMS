import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from '../../../components';
import {HeaderText} from './styles';

const Announcement = ({navigation}: any) => {
  const handleGoback = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Header handleBack={handleGoback}>
        <HeaderText>Announcements</HeaderText>
      </Header>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.text}>Comming soon...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: '#333',
    fontFamily: 'JosefinSans-SemiBold',
  },
});

export default Announcement;
