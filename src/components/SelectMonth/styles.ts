import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  background-color: #ededed;
  padding-vertical: 16px;
`;

export const ModalTitle = styled.Text`
  font-size: 16px;
  line-height: 16px;
  font-family: JosefinSans-Bold;
  text-align: center;
  background-color: #ffffff;
  padding-vertical: 12px;
`;

export const Grid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 16px;
  row-gap: 12px;
  column-gap: 12px;
`;

export const MonthButton = styled.TouchableOpacity<{selected: boolean}>`
  width: 80px;
  height: 50px;
  border-radius: 8px;
  background-color: ${({selected}) => (selected ? '#636B2F' : '#fff')};
  align-items: center;
  justify-content: center;
`;

export const MonthText = styled.Text<{selected: boolean}>`
  font-size: 14px;
  line-height: 16px;
  font-family: JosefinSans-SemiBold;
  padding-top: 4px;
  color: ${({selected}) => (selected ? '#fff' : '#000')};
`;
