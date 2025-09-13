import styled from 'styled-components/native';

export const CardWrapper = styled.View`
  background-color: #fff;
  border-radius: 8px;
  padding: 12px 16px;
  margin-horizontal: 16px;
  margin-bottom: 12px;
  elevation: 2;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Left = styled.View`
  flex: 1;
`;

export const Right = styled.View`
  align-items: flex-start;
`;

export const TitleRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  font-family: JosefinSans-SemiBold;
  color: #333333;
`;

export const SubText = styled.Text`
  font-size: 12px;
  font-family: JosefinSans-Regular;
  color: #28282b;
  margin-bottom: 4px;
`;

export const DateText = styled.Text`
  font-size: 12px;
  font-family: JosefinSans-Medium;
  color: #28282b;
`;

export const PaidByText = styled.Text`
  font-size: 12px;
  font-family: JosefinSans-Medium;
  color: #28282b;
`;
export const FloatingActionButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #636B2F;
  flex-direction: row;
  padding: 8px 24px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  width: 120px;
  justify-content: space-between;
`;