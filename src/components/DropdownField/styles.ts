import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
`;

export const DropdownButton = styled.TouchableOpacity<{
  isSelected?: boolean;
}>`
  height: 56px;
  border-width: 1px;
  border-color: #bdbdbd;
  border-radius: 4px;
  padding: 0 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({isSelected}) =>
    isSelected ? '#F2F2F2' : '#FFFFFF'};
`;
export const SelectedText = styled.Text<{
  isSelected?: boolean;
}>`
  font-size: 13px;
  color: #000;
  color: ${({isSelected}) =>
    isSelected ? '#A9A9A9' : '#000000'};
  font-family: JosefinSans-Medium;
`;

export const ArrowText = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const DropdownList = styled.View`
  position: absolute;
  top: 55px;
  left: 0;
  right: 0;
  background-color: #fff;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 8px;
  z-index: 9999;
  elevation: 10;
  overflow: hidden;
`;

export const Option = styled.TouchableOpacity`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const OptionText = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: JosefinSans-Medium;
`;
