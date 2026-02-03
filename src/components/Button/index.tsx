import React from 'react';
import {Button as RNPButton, ButtonProps as RNBProps} from 'react-native-paper';

export enum ButtonModes {
  Text = 'text',
  Outlined = 'outlined',
  Contained = 'contained',
  Elevated = 'elevated',
}

const ENABLED_BG = '#636B2F';
const DISABLED_BG = '#C5C7B6';
const DISABLED_TEXT = '#8E8E8E';

export const Button: React.FunctionComponent<RNBProps> = ({
  children,
  mode = ButtonModes.Contained,
  disabled,
  ...props
}) => {
  return (
    <RNPButton
      mode={mode}
      disabled={disabled}
      theme={{
        colors: {
          primary: ENABLED_BG,
          onSurface: DISABLED_TEXT,
          outline: ENABLED_BG,
        },
      }}
      {...props}
      style={[
        {
          borderRadius: 6,
          height: 48,
          justifyContent: 'center',
          backgroundColor:
            mode === ButtonModes.Contained
              ? disabled
                ? DISABLED_BG
                : ENABLED_BG
              : 'transparent',
        },
        props.style,
      ]}
      labelStyle={{
        color: disabled ? DISABLED_TEXT : '#FFFFFF',
      }}>
      {children}
    </RNPButton>
  );
};

export default Button;
