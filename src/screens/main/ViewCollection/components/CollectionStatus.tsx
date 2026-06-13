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

const TOTAL_FLATS = 9;

const CollectionStatus = ({
  totalTreasureAmount,
  totalCollectionAmount,
  expensesAmount,
  totalPayments,
}: any) => {
  return (
    <View>
      <BackgroundContainer>
        <AmountBackground />
        <TextOverlay>
          <SubText>Total Collection</SubText>
          <AmountText>₹ {totalTreasureAmount?.toLocaleString()}</AmountText>
        </TextOverlay>
      </BackgroundContainer>
      <AmountContainer>
        <ExpenseAmountContainer>
          <SubText>Expense Amount</SubText>
          <Amount>₹ {expensesAmount?.toLocaleString()}</Amount>
        </ExpenseAmountContainer>
        <BalanceAmountContainer>
          <SubText>Balance Amount</SubText>
          <Amount>
            ₹ {totalCollectionAmount - expensesAmount?.toLocaleString()}
          </Amount>
        </BalanceAmountContainer>
      </AmountContainer>
      <StatusContainer>
        <StatusBox>
          <ColorDot color="#2E7D32" />
          <StatusText>
            Paid : {totalPayments} of {TOTAL_FLATS} Flats
          </StatusText>
        </StatusBox>

        <StatusBox>
          <ColorDot color="#D32F2F" />
          <StatusText>
            Pending : {TOTAL_FLATS - totalPayments} of {TOTAL_FLATS} Flats
          </StatusText>
        </StatusBox>

        <StatusBox>
          <ColorDot color="#FB8C00" />
          <StatusText>
            Collected : ₹{totalCollectionAmount?.toLocaleString()}
          </StatusText>
        </StatusBox>

        <StatusBox>
          <ColorDot color="#1976D2" />
          <StatusText>
            Expenses : ₹{expensesAmount?.toLocaleString()}
          </StatusText>
        </StatusBox>
      </StatusContainer>
    </View>
  );
};

export default CollectionStatus;
