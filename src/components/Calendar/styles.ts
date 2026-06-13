import styled from 'styled-components/native';

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
