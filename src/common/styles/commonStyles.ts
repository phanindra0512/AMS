import styled from 'styled-components/native';

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const NoDataContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NoDataLabel = styled.Text`
  font-size: 14px;
  color: #313131;
  font-family: JosefinSans-Medium;
`;
