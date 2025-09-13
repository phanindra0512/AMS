import React from 'react';
import styled from 'styled-components/native';
import {
  TextInput as TextInputPaper,
  TextInputProps as TextInputPaperProps,
} from 'react-native-paper';

export interface TextInputProps extends TextInputPaperProps {
  children?: React.ReactNode;
}

const StyledTextInput = styled(TextInputPaper).attrs(({disabled}) => ({
  mode: 'outlined',
  placeholderTextColor: '#BEBCBC',
  activeOutlineColor: '#bdbdbd',
  theme: {
    roundness: 4,
    colors: {
      background: disabled ? '#F2F2F2' : '#ffffff',
      outline: '#bdbdbd',
      text: disabled ? '#A9A9A9' : '#000000',
    },
  },
  contentStyle: {
    fontFamily: 'JosefinSans-Medium',
    fontSize: 13,
  },
}))`
  height: 56px;
  font-family: JosefinSans-Medium;
`;

export const TextInput = ({children, ...props}: TextInputProps) => {
  return <StyledTextInput {...props}>{children}</StyledTextInput>;
};

export default TextInput;
