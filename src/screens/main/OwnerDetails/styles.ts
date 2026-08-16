import styled from 'styled-components/native';

export const HeaderText = styled.Text`
  font-size: 16px;
  font-family: JosefinSans-Bold;
`;

export const ProfileContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-vertical: 20px;
`;

export const ImageBlock = styled.View`
  width: 70px;
  height: 70px;
  background-color: #636b2f;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
`;

export const ProfileText = styled.Text`
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
  font-family: JosefinSans-Bold;
`;
export const ProfileName = styled.Text`
  font-size: 20px;
  line-height: 20px;
  color: #1b1b1b;
  font-family: JosefinSans-Bold;
  margin-top: 8px;
`;

export const PayIdText = styled.Text`
  font-size: 14px;
  line-height: 14px;
  color: #747476;
  font-family: JosefinSans-Medium;
  padding-top: 4px;
`;

export const Container = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

export const Card = styled.View`
  border: 1px solid #cccccc;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #ffffff;
`;

export const CardHeader = styled.View`
  background-color: #636b2f;
  border-top-left-radius: 8px;
  width: 120px;
  align-items: center;
  justify-content: center;
  padding-vertical: 8px;
`;

export const SectionText = styled.Text`
  font-size: 12px;
  line-height: 12px;
  font-family: JosefinSans-SemiBold;
  color: #ffffff;
`;

export const CardContent = styled.View`
  padding: 12px 16px;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  flex: 1;
  color: #313131;
  font-family: JosefinSans-Regular;
  font-size: 14px;
`;

export const Value = styled.Text`
  flex: 1;
  color: #000000;
  font-size: 14px;
  font-family: JosefinSans-Medium;
  text-align: right;
`;

export const LogoutText = styled.Text`
  font-size: 16px;
  font-family: JosefinSans-SemiBold;
  color: #d32f2f;
  margin-top: 24px;
  margin-bottom: 16px;
  text-align: center;
`;

export const BadgeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  flex: 1;
`;

export const Badge = styled.View<{type: string}>`
  padding-horizontal: 10px;
  padding-vertical: 5px;
  border-radius: 8px;

  background-color: ${({type}) => {
    switch (type) {
      case 'OWNER':
        return '#E8F5E9';
      case 'TENANT':
        return '#E3F2FD';
      case 'TREASURER':
        return '#FFF3E0';
      case 'ADMIN':
        return '#F3E5F5';
      default:
        return '#F1F1F1';
    }
  }};
`;

export const BadgeText = styled.Text<{type: string}>`
  font-size: 10px;
  font-family: JosefinSans-Bold;

  color: ${({type}) => {
    switch (type) {
      case 'OWNER':
        return '#2E7D32';
      case 'TENANT':
        return '#1565C0';
      case 'TREASURER':
        return '#E65100';
      case 'ADMIN':
        return '#7B1FA2';
      default:
        return '#616161';
    }
  }};
`;

export const CopyHint = styled.Text`
  font-size: 10px;
  line-height: 12px;
  color: #636b2f;
  font-family: JosefinSans-Medium;
  margin-top: 3px;
`;
export const PayIdContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;
  border-radius: 6px;
  background-color: #f1f3e8;
`;