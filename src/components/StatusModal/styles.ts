import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  background-color: #ededed;
  border-radius: 16px;
  overflow: hidden;
`;
export const ModalTitle = styled.Text`
  font-size: 20px;
  line-height: 24px;
  font-family: JosefinSans-Bold;
  text-align: center;
  padding-vertical: 4px;
`;
export const ModalDescription = styled.Text`
  font-size: 14px;
  line-height: 20px;
  font-family: JosefinSans-Regular;
  text-align: center;
  padding-horizontal: 20px;
`;
export const StyledButton = styled.View`
  justify-content: center;
  background-color: #636b2f;
  margin-vertical: 16px;
  height: 45px;
  width: 60%;
  align-self: center;
  border-radius: 100px;
`;
export const ButtonTitle = styled.Text`
  font-family: JosefinSans-Bold;
  font-size: 14px;
`;