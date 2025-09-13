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
export const BackgroundContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const TextOverlay = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
`;
export const SubText = styled.Text`
  font-size: 11px;
  line-height: 12px;
  font-family: JosefinSans-Regular;
  color: #ffffff;
  margin-bottom: 4px;
`;

export const AmountText = styled.Text`
  font-size: 36px;
  line-height: 36px;
  font-family: JosefinSans-Bold;
  color: #e2a610;
`;

export const AmountContainer = styled.View`
  background-color: red;
  flex-direction: row;
  justify-content: space-between;
  background-color: #989e72;
  padding-vertical: 16px;
`;
export const ExpenseAmountContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-right-color: #cccccc;
`;
export const BalanceAmountContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Amount = styled.Text`
  font-size: 24px;
  font-family: JosefinSans-Bold;
  color: #ffffff;
  line-height: 24px;
  margin-top: 8px;
`;
export const StatusContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-vertical: 6px;
  padding-horizontal: 12px;
`;

export const StatusBox = styled.View`
  width: 48%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const ColorDot = styled.View<{color: string}>`
  width: 12px;
  height: 12px;
  background-color: ${({color}) => color};
  margin-right: 8px;
  border-radius: 2px;
  margin-top: 2px;
`;

export const StatusText = styled.Text`
  flex-shrink: 1;
  flex-wrap: wrap;
  font-size: 12px;
  color: #28282b;
  font-family: JosefinSans-SemiBold;
`;
export const CardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  background-color: #ffffff;
  border-bottom-width: 1px;
  border-color: #cccccc;
`;
export const Avatar = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 24px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-width: 1px;
  border-color: #e0e0e0;
`;
export const Content = styled.View`
  flex: 1;
`;

export const NameText = styled.Text`
  font-size: 14px;
  line-height: 18px;
  font-family: JosefinSans-SemiBold;
`;

export const DateText = styled.Text`
  font-size: 12px;
  line-height: 12px;
  font-family: JosefinSans-Regular;
  color: #333;
  margin-top: 4px;
`;

export const RightSection = styled.View`
  align-items: center;
`;

export const AmountTextNew = styled.Text`
  font-size: 14px;
  font-family: JosefinSans-Bold;
`;

export const StatusBadge = styled.View<{color: string}>`
  background-color: ${({color}) => color};
  padding: 6px;
  border-radius: 6px;
  margin-top: 6px;
  min-width: 70px;
  align-items: center;
  justify-content: center;
`;

export const StatusTextNew = styled.Text`
  font-size: 10px;
  line-height: 12px;
  font-family: JosefinSans-SemiBold;
  color: #fff;
`;

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
