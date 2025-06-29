import React from 'react';
import {Image, View} from 'react-native';
import {
  BalanceAmount,
  BalanceAmountContainer,
  HeaderContainer,
  HeaderText,
  ImageContainer,
  SubHeaderText,
} from '../styles';

interface HeaderProps {
  handleNavigation: () => void;
}

const Header: React.FC<HeaderProps> = ({handleNavigation}) => {
  return (
    <HeaderContainer>
      <View>
        <HeaderText>Hi Phani!</HeaderText>
        <SubHeaderText>Flat No: 201, Resident</SubHeaderText>
      </View>

      <BalanceAmountContainer onPress={handleNavigation}>
        <ImageContainer>
          <Image
            source={require('../../../../assets/images/amountBag.png')}
            style={{
              width: 35,
              height: 35,
              resizeMode: 'contain',
            }}
          />
          <BalanceAmount>₹ 10,000</BalanceAmount>
        </ImageContainer>
      </BalanceAmountContainer>
    </HeaderContainer>
  );
};

export default Header;
