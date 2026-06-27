import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  background-color: #ededed;
  border-radius: 16px;
  overflow: hidden;
  padding-vertical: 12px;
`;
export const ModalTitle = styled.Text`
  font-size: 20px;
  line-height: 20px;
  font-family: JosefinSans-Bold;
  text-align: center;
`;
export const ModalDescription = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-family: JosefinSans-Regular;
  text-align: center;
  padding-top: 6px;
`;
export const AmountText = styled.Text`
  font-size: 36px;
  line-height: 36px;
  font-family: JosefinSans-Bold;
  text-align: center;
  color: #e2a610;
  padding-top: 16px;
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

export const SummaryRow = styled.View`
  flex-direction: row;
  margin-vertical: 16px;
  margin-horizontal: 16px;
  gap: 8px;
`;

export const SummaryCard = styled.View<{variant: 'success' | 'danger'}>`
  flex: 1;
  align-items: center;
  padding-horizontal: 16px;
  padding-vertical: 8px;
  border-radius: 8px;

  background-color: ${({variant}) =>
    variant === 'success'
      ? 'rgba(34, 197, 94, 0.12)'
      : 'rgba(239, 68, 68, 0.12)'};
`;

export const SummaryLabel = styled.Text`
  font-size: 14px;
  color: #666;
  font-family: JosefinSans-Regular;
`;

export const SummaryValue = styled.Text<{variant: 'success' | 'danger'}>`
  margin-vertical: 4px;
  font-size: 18px;
  font-family: JosefinSans-Bold;

  color: ${({variant}) => (variant === 'success' ? '#15803D' : '#B91C1C')};
`;
