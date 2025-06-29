import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Appbar as RNPHeader} from 'react-native-paper';
import {ArrowLeft} from '../../assets/svg';

interface HeaderProps {
  children?: any;
  handleBack?: any;
}

export const Header = ({children, handleBack}: HeaderProps) => {
  return (
    <RNPHeader
      style={{
        backgroundColor: 'white',
        elevation: 0,
        shadowColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: '#D9E4E9',
      }}>
      <Pressable style={{padding: 12, borderRadius: 50}} onPress={handleBack}>
        <ArrowLeft width={30} height={30} />
      </Pressable>
      {children}
    </RNPHeader>
  );
};

export default Header;
