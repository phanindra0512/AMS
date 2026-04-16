import styled from 'styled-components/native';

export const HeaderText = styled.Text`
  font-size: 16px;
  font-family: JosefinSans-Bold;
`;
export const CalendarContainer = styled.Pressable`
  background-color: #ffffff;
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

export const Card = styled.View`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  elevation: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: JosefinSans-Bold;
`;

export const SubText = styled.Text`
  font-size: 14px;
  font-family: JosefinSans-Regular;
  color: #343434;
  margin-top: 4px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`;

export const AmountText = styled.Text`
  font-size: 14px;
  font-family: JosefinSans-Regular;
  color: #000;
`;

export const LinkText = styled.Text`
  font-size: 12px;
  font-family: JosefinSans-Regular;
  color: #11B7FB;
  margin-left: 8px;
  text-decoration: underline;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  gap: 12px;
  margin-top: 16px;
`;
export const ButtonTitle = styled.Text`
  font-family: JosefinSans-Bold;
  font-size: 14px;
`;
