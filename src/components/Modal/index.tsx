import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import RNModal from 'react-native-modal';

export const width = Dimensions.get('screen').width;
export const height = Dimensions.get('screen').height;

const Modal = ({
  children,
  style,
  useNativeDriver = true,
  useNativeDriverForBackdrop = true,
  ...props
}: any) => {
  return (
    <RNModal
      useNativeDriver={useNativeDriver}
      useNativeDriverForBackdrop={useNativeDriverForBackdrop}
      {...props}
      style={[{flex: 1, margin: 0}, style]}
    >
      {children}
    </RNModal>
  );
};

export default Modal;
