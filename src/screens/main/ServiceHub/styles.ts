import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
export const HeaderText = styled.Text`
  font-size: 16px;
  font-family: JosefinSans-Bold;
  padding-left: 20px;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

export const SectionTitle = styled.Text`
  font-size: 14px;
  font-family: JosefinSans-Bold;
  padding-left: 8px;
`;

export const Card = styled.View`
  background-color: #ffffff;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 4px;
  elevation: 1;
  margin-horizontal: 16px;
`;

export const Name = styled.Text`
  font-size: 16px;
  line-height: 18px;
  font-family: JosefinSans-Bold;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`;

export const CallService = styled(InfoRow)`
  justify-content: center;
  padding-bottom: 4px;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-family: JosefinSans-Regular;
  margin-left: 6px;
  color: #313131;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: #e2e8f0;
  margin-vertical: 16px;
`;
export const CallText = styled.Text`
  color: #198754;
  font-size: 14px;
  line-height: 14px;
  font-family: JosefinSans-Bold;
  margin-left: 6px;
`;

export const Fab = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #636B2F;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  elevation: 5;
`;

export const FabText = styled.Text`
  color: white;
  font-size: 34px;
  line-height: 34px;
  font-family: JosefinSans-Regular;

`;
