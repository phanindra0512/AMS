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
import {Badge, BadgeText, BadgeContainer} from '../styles';

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
        <HeaderText>Hi {OwnerDetails?.name}</HeaderText>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
          <SubHeaderText>Flat No: {OwnerDetails?.flatNumber}</SubHeaderText>
          {OwnerDetails?.role && (
            <View style={{marginLeft: 8}}>
              <Badge type={OwnerDetails.role}>
                <BadgeText type={OwnerDetails.role}>{OwnerDetails.role}</BadgeText>
              </Badge>
            </View>
          )}
        </View>
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
