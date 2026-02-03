import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #636b2f;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px;
`;
export const HeaderText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: JosefinSans-Bold;
`;
export const SubHeaderText = styled.Text<{color?: string}>`
  font-size: 12px;
  color: ${({color}) => color || '#f0f0f0'};
  font-family: JosefinSans-Regular;
  line-height: 18px;
  padding-top: 4px;
`;
export const IconContainer = styled.Pressable<{bg?: string}>`
  align-items: center;
  justify-content: center;
  background-color: ${({bg}) => bg || '#7b843f'};
  border-radius: 10px;
  height: 50px;
  width: 50px;
  border-width: 1px;
  border-color: #f0f0f0;
`;
export const BalanceAmountContainer = styled.Pressable`
  align-items: center;
  justify-content: center;
  background-color: #7b843f;
  border-radius: 8px;
  border-width: 1px;
  border-color: #f0f0f0;
  padding: 4px 12px;
`;
export const ImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const BalanceAmount = styled.Text`
  font-size: 12px;
  color: #f0f0f0;
  font-family: JosefinSans-Bold;
  padding-left: 4px;
`;
export const CardContainer = styled.View`
  margin: 16px;
  background-color: #fff;
  border-radius: 8px;
  padding-horizontal: 18px;
  padding-vertical: 12px;
  elevation: 2;
`;
export const PaymentStatusText = styled.Text`
  font-size: 16px;
  font-family: JosefinSans-Bold;
  margin-left: 10px;
`;
export const ButtonContainer = styled.View`
  margin-top: 14px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: #7b843f;
  border-radius: 10px;
  elevation: 2;
`;
export const ButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-family: JosefinSans-Bold;
`;
export const StyledButton = styled.Pressable`
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: #636b2f;
  margin-top: 16px;
  border-radius: 6px;
`;
export const ButtonTitle = styled.Text`
  font-family: JosefinSans-Bold;
  font-size: 12px;
  line-height: 12px;
  color: #fff;
`;
export const OutlinedStyledButton = styled.Pressable`
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-top: 16px;
  border-radius: 6px;
  border-width: 1px;
  border-color: #636b2f;
`;
export const OutlinedStyledButtonText = styled.Text`
  font-family: JosefinSans-Bold;
  font-size: 12px;
  color: #636b2f;
  text-align: center;
`;
export const ServicesContainer = styled.View`
  flex: 1;
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-horizontal: 24px;
  padding-vertical: 12px;
  elevation: 2;
`;
export const ServiceHeading = styled.Text`
  font-size: 18px;
  font-family: JosefinSans-Bold;
  padding-vertical: 12px;
`;
export const ServiceContainer = styled.Pressable`
  height: 110px;
  width: 110px;
  align-items: center;
  justify-content: center;
`;
export const ServiceCard = styled.View`
  background-color: #ffffff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  elevation: 1;
  border-width: 1px;
  border-color: #e0e0e0;
  height: 65px;
  width: 65px;
`;
export const ServiceText = styled.Text`
  font-size: 12px;
  font-family: JosefinSans-Regular;
  padding-top: 4px;
  text-align: center;
`;
