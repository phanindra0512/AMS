import * as React from 'react';
import {View} from 'react-native';
import {
  Amount,
  AmountContainer,
  AmountText,
  BackgroundContainer,
  BalanceAmountContainer,
  ColorDot,
  ExpenseAmountContainer,
  StatusBox,
  StatusContainer,
  StatusText,
  SubText,
  TextOverlay,
} from '../styles';
import {AmountBackground} from '../../../../assets/svg';

const CollectionStatus = () => {
  return (
    <View>
      <BackgroundContainer>
        <AmountBackground />
        <TextOverlay>
          <SubText>Total Collection</SubText>
          <AmountText>₹ 10,000</AmountText>
        </TextOverlay>
      </BackgroundContainer>
      <AmountContainer>
        <ExpenseAmountContainer>
          <SubText>Expense Amount</SubText>
          <Amount>₹ 8,000</Amount>
        </ExpenseAmountContainer>
        <BalanceAmountContainer>
          <SubText>Balance Amount</SubText>
          <Amount>₹ 2,000</Amount>
        </BalanceAmountContainer>
      </AmountContainer>
      <StatusContainer>
        <StatusBox>
          <ColorDot color="#2E7D32" />
          <StatusText>Paid : 6 of 9 Flats</StatusText>
        </StatusBox>

        <StatusBox>
          <ColorDot color="#D32F2F" />
          <StatusText>Pending : ₹2,000</StatusText>
        </StatusBox>

        <StatusBox>
          <ColorDot color="#FB8C00" />
          <StatusText>Collected : ₹6,000</StatusText>
        </StatusBox>

        <StatusBox>
          <ColorDot color="#1976D2" />
          <StatusText>Expenses : ₹4,000</StatusText>
        </StatusBox>
      </StatusContainer>
    </View>
  );
};

export default CollectionStatus;
