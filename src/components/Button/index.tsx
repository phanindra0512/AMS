import React from 'react';
import {Button as RNPButton, ButtonProps as RNBProps} from 'react-native-paper';

export enum ButtonModes {
  Text = 'text',
  Outlined = 'outlined',
  Contained = 'contained',
  Elevated = 'elevated',
}

export const DEFAULT_OUTLINED = {
  colors: {
    background: 'transparent',
    outline: '#636b2f',
  },
};

export const Button: React.FunctionComponent<RNBProps> = ({
  children,
  mode = ButtonModes.Contained,
  disabled,
  ...props
}) => {
  return (
    <RNPButton
      mode={mode}
      theme={DEFAULT_OUTLINED}
      disabled={disabled}
      {...props}
      style={[
        {
          borderRadius: 6,
          height: 48,
          justifyContent: 'center',
          backgroundColor: '#636B2F',
        },
        props.style,
      ]}>
      {children}
    </RNPButton>
  );
};

export default Button;
