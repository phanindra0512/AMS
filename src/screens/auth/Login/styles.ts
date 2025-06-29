import styled from 'styled-components/native';

import {SafeAreaView} from 'react-native-safe-area-context';

export const SafeAreaContainer = styled(SafeAreaView).attrs({
  edges: ['left', 'right'],
})`
  flex: 1;
  background-color: #fff;
`;
export const OverlayContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.6);
  flex: 1;
  justify-content: flex-end;
`;
export const ModalContainer = styled.View`
  background-color: #ffffff;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  padding-bottom: 30px;
`;
export const LogoContainer = styled.View`
  background-color: #636b2f;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  position: absolute;
  top: -50px;
  align-self: center;
  justify-content: center;
  align-items: center;
  elevation: 5;
`;
export const ContentWrapper = styled.View`
  margin-top: 55px;
  padding-horizontal: 24px;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-family: JosefinSans-Bold;
  line-height: 32px;
`;
export const SubTitle = styled.Text`
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 24px;
  font-family: JosefinSans-SemiBold;
  padding-left: 4px;
  line-height: 14px;
`;
export const MobileNumber = styled.Text`
  color: #636B2F;
  font-family: JosefinSans-Bold;
`;
export const Row = styled.View`
  flex-direction: row;
`;
export const CountryCodeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 55px;
  border-width: 1px;
  border-color: #ccc;
  padding-horizontal: 8px;
  border-radius: 8px;
`;
export const CountryCode = styled.Text`
  font-family: JosefinSans-SemiBold;
  font-size: 16px;
`;
export const StyledInput = styled.TextInput`
  height: 55px;
  border-color: #ccc;
  border-width: 1px;
  margin-bottom: 16px;
  margin-left: 8px;
  padding-horizontal: 8px;
  border-radius: 8px;
  flex: 1;
  font-family: JosefinSans-SemiBold;
  font-size: 14px;
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
export const CaptionText = styled.Text`
  font-family: JosefinSans-SemiBold;
  font-size: 12px;
  text-align: center;
`;

export const HighlightText = styled.Text`
  font-family: JosefinSans-Bold;
  color: #636b2f;
`;