import styled from 'styled-components/native';

export const HeaderText = styled.Text`
  font-size: 16px;
  font-family: JosefinSans-Bold;
`;
export const TitleText = styled.Text`
  font-size: 18px;
  font-family: JosefinSans-Bold;
  padding-left: 20px;
  padding-top: 12px;
`;
export const Card = styled.TouchableOpacity`
  padding: 12px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #e6e6e6;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #636b2f;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const Initials = styled.Text`
  color: #fff;
  font-family: JosefinSans-SemiBold;
  font-size: 12px;
  line-height: 12px;
`;

export const ContactInfo = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-family: JosefinSans-SemiBold;
`;

export const PhoneText = styled.Text`
  color: #313131;
  font-family: JosefinSans-Regular;
`;

export const IconRow = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 20px;
  margin-left: 80px;
`;

export const IconWrapper = styled.TouchableOpacity`
  margin-right: 40px;
`;
