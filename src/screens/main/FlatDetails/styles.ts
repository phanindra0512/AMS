import styled from 'styled-components/native';

export const HeaderText = styled.Text`
  font-size: 16px;
  font-family: JosefinSans-Bold;
`;

export const SectionTitle = styled.Text`
  font-size: 12px;
  color: #747476;
  margin-bottom: 4px;
  font-family: JosefinSans-Regular;
  padding-left: 24px;
`;

export const Card = styled.TouchableOpacity`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  border-radius: 8px;
  margin-bottom: 12px;
  margin-horizontal: 20px;
  border: 1px solid #e0e0e0;
`;

export const Left = styled.View``;

export const Title = styled.Text`
  font-size: 16px;
  font-family: JosefinSans-SemiBold;
  color: #1b1b1b;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  margin-right: 4px;
`;

export const SubText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: #313131;
  padding-left: 4px;
  font-family: JosefinSans-Regular;
`;

export const BadgeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  gap: 8px;
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