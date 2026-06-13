import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #f8f8f8;
  flex: 1;
  padding-horizontal: 20px;
`;
export const HeaderText = styled.Text`
  font-size: 16px;
  font-family: JosefinSans-Bold;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: JosefinSans-SemiBold;
  color: #1b1b1b;
  line-height: 18px;
  padding-left: 20px;
  padding-top: 24px;
  padding-bottom: 4px;
`;
export const SubTitle = styled.Text`
  font-size: 12px;
  font-family: JosefinSans-Regular;
  color: #313131;
  line-height: 12px;
  padding-left: 20px;
  padding-bottom: 16px;
`;
export const Label = styled.Text`
  font-size: 12px;
  color: #747476;
  margin-bottom: 4px;
  font-family: JosefinSans-Regular;
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

export const DottedUploadBox = styled.TouchableOpacity`
  border: 1px dashed #bdbdbd;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-vertical: 8px;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  line-height: 14px;
  color: #bdbdbd;
  font-family: JosefinSans-Medium;
  padding-left: 4px;
`;
export const SuccessBlock = styled.View`
  background-color: #fdfdfd;
  border-radius: 4px;
  padding-vertical: 16px;
  padding-horizontal: 12px;
  margin-vertical: 12px;
  border-left-width: 4px;
  border-left-color: #10a957;
  border-top-width: 1px;
  border-top-color: #bdbdbd;
  border-right-width: 1px;
  border-right-color: #bdbdbd;
  border-bottom-width: 1px;
  border-bottom-color: #bdbdbd;
  flex-direction: row;
  justify-content: space-between;
`;

export const SuccessText = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-family: JosefinSans-Regular;
`;
export const ActionsContainer = styled.View`
  width: 65px;
  flex-direction: row;
  justify-content: space-between;
`;
