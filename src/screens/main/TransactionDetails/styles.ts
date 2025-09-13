import styled from 'styled-components/native';

export const HeaderText = styled.Text`
  font-size: 16px;
  font-family: JosefinSans-Bold;
`;
export const Container = styled.View`
  flex: 1;
  background-color: #636b2f;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
export const Card = styled.View`
  background-color: #fff;
  width: 100%;
  border-radius: 16px;
  padding-vertical: 24px;
  align-items: center;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 4;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-family: JosefinSans-SemiBold;
  line-height: 20px;
  padding-top: 16px;
  padding-bottom: 8px;
  color: #000;
`;
export const Subtitle = styled.Text`
  font-size: 14px;
  line-height: 14px;
  color: #a6a7b5;
  font-family: JosefinSans-Regular;
  text-align: center;
`;
export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: #e2e8f0;
  margin-vertical: 20px;
`;
export const DividerDot = styled.View`
  width: 16px;
  height: 16px;
  background-color: #636b2f;
  border-radius: 8px;
  `;
export const DividerWithDots = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-vertical: 20px;
`;
export const Label = styled.Text`
  font-size: 12px;
  line-height: 12px;
  font-family: JosefinSans-Regular;
  color: #313131;
`;
export const Amount = styled.Text`
  font-size: 26px;
  line-height: 26px;
  color: #000;
  font-family: JosefinSans-Bold;
  margin-top: 8px;
  margin-bottom: 16px;
`;
export const DetailRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  padding-horizontal: 24px;
`;
export const DetailLabel = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-family: JosefinSans-Medium;
  color: #313131;
`;

export const DetailValue = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-family: JosefinSans-SemiBold;
  color: #313131;
`;

export const ThankYouText = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-family: JosefinSans-Medium;
`;

export const ActionRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 24px;
`;

export const ActionButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const ActionLabel = styled.Text`
  font-size: 10px;
  margin-top: 8px;
  font-family: JosefinSans-Regular;
  color: #fff;
`;
