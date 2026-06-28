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
import {GlobalStore} from '../../../../storage/stores';
import {TreasurerAmountResponse} from '../../../../types/payment';

interface HeaderProps {
  handleNavigation: () => void;
  treasurerData?: TreasurerAmountResponse;
}

const Header: React.FC<HeaderProps> = ({handleNavigation, treasurerData}) => {
  const OwnerDetails = GlobalStore.ownerInfo.getValue('ownerInfo');
  console.log('OwnerDetails ---> ', OwnerDetails);

  return (
    <HeaderContainer>
      <View>
        <HeaderText>Hi {OwnerDetails?.name}!</HeaderText>
        <SubHeaderText>
          Flat No: {OwnerDetails?.flatNumber}, {OwnerDetails?.role}
        </SubHeaderText>
      </View>

      {treasurerData && (
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
            <BalanceAmount>
              ₹ {treasurerData?.treasurerAmount?.toLocaleString()}
            </BalanceAmount>
          </ImageContainer>
        </BalanceAmountContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
