import styled from 'styled-components/native';

export const HeaderText = styled.Text`
  font-size: 16px;
  font-family: JosefinSans-Bold;
`;
export const CalendarContainer = styled.Pressable`
  background-color: #f5f5f5;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-color: #e0e0e0;
  padding: 12px;
  margin-horizontal: 16px;
  border-radius: 8px;
  margin-top: 16px;
`;
export const CalendarText = styled.Text`
  font-size: 14px;
  font-family: JosefinSans-Bold;
  color: #000000;
  line-height: 24px;
  padding-left: 8px;
`;
export const TreasurerText = styled.Text`
  font-size: 12px;
  font-family: JosefinSans-Regular;
  color: #343434;
  line-height: 12px;
  padding-left: 8px;
`;
export const ExpenseTotalText = styled.Text`
  font-size: 16px;
  font-family: JosefinSans-SemiBold;
  color: #343434;
  line-height: 20px;
  padding-left: 16px;
  padding-top: 24px;
  padding-bottom: 12px;
`;
const BottomButton = styled.TouchableOpacity`
  background-color: #636b2f;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-color: #ccc;
`;
export const StyledButton = styled.View`
  justify-content: center;
  background-color: #636b2f;
  margin-top: 16px;
  margin-bottom: 8px;
  border-radius: 6px;
  height: 48px;
`;
export const ButtonTitle = styled.Text`
  font-family: JosefinSans-Bold;
  font-size: 14px;
`;
