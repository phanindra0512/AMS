import styled from 'styled-components/native';

type StatusProps = {
  status: string;
};

export const HeaderText = styled.Text`
  font-size: 16px;
  font-family: JosefinSans-Bold;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 16px;
`;

export const SectionTitle = styled.Text`
  font-size: 16px;
  color: #313131;
  font-family: JosefinSans-SemiBold;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Card = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  elevation: 1;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #313131;
  font-family: JosefinSans-Medium;
`;

export const Dots = styled.View`
  background-color: transparent;
  border-top-width: 1px;
  border-top-color: #999;
  border-style: dashed;
  margin-vertical: 12px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
`;

export const DateText = styled.Text`
  margin-left: 6px;
  font-size: 14px;
  color: #28282b;
  font-family: JosefinSans-Medium;
`;

export const PaidStatus = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
`;

export const StatusText = styled.Text<StatusProps>`
  font-size: 14px;
  line-height: 14px;
  margin-left: 4px;
  font-family: JosefinSans-Bold;
  color: ${props =>
    props.status === 'APPROVED'
      ? '#198754'
      : props.status === 'PENDING'
      ? '#FFC107'
      : '#d32f2f'};
`;

export const AmountText = styled.Text`
  font-size: 16px;
  font-family: JosefinSans-SemiBold;
`;

export const NoTransactionContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.View`
  flex: 1;
`;

export const RejectionContainer = styled.View`
  margin-top: 12px;
  padding-top: 12px;
  border-top-width: 1px;
  border-top-color: #e0e0e0;
`;

export const RejectionTitle = styled.Text`
  font-size: 14px;
  color: #d32f2f;
  font-family: JosefinSans-Medium;
  margin-bottom: 4px;
`;

export const RejectionMessage = styled.Text`
  font-size: 13px;
  color: #757575;
  font-family: JosefinSans-Regular;
  line-height: 18px;
`;
