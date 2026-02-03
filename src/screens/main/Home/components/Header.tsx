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
import { GlobalStore } from '../../../../storage/stores';

interface HeaderProps {
  handleNavigation: () => void;
}

const Header: React.FC<HeaderProps> = ({handleNavigation}) => {
 const OwnerDetails = GlobalStore.ownerInfo.getValue('ownerInfo');

console.log('Owner Details:', OwnerDetails);

  return (
    <HeaderContainer>
      <View>
        <HeaderText>Hi {OwnerDetails?.name}!</HeaderText>
        <SubHeaderText>Flat No: {OwnerDetails?.flatNumber}, {OwnerDetails?.role}</SubHeaderText>
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
