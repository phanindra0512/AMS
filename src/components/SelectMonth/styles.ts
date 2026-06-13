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

export const Heading = styled.Text`
  font-size: 16px;
  line-height: 16px;
  font-family: JosefinSans-Bold;
  padding-top: 24px;
  padding-left: 24px;
`;

export const Grid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 16px;
  row-gap: 12px;
  column-gap: 12px;
`;

export const YearContainer = styled.View`
  flex-direction: row;
  padding: 16px;
  row-gap: 12px;
  column-gap: 16px;
`;
export const MonthButton = styled.TouchableOpacity<{selected: boolean; disabled?: boolean}>`
  width: 80px;
  height: 50px;
  border-radius: 8px;
  background-color: ${({selected, disabled}) => 
    disabled ? '#d6d3d3' : selected ? '#636B2F' : '#fff'};
  align-items: center;
  justify-content: center;
`;

export const MonthText = styled.Text<{selected: boolean; disabled?: boolean}>`
  font-size: 14px;
  line-height: 16px;
  font-family: JosefinSans-SemiBold;
  padding-top: 4px;
  color: ${({selected, disabled}) => 
    disabled ? '#999' : selected ? '#fff' : '#000'};
`;

export const StyledButton = styled.View`
  justify-content: center;
  background-color: #636b2f;
  margin: 16px;
  border-radius: 6px;
  height: 48px;
`;
export const ButtonTitle = styled.Text`
  font-family: JosefinSans-Bold;
  font-size: 14px;
`;