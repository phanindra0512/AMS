import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  CardContainer,
  Avatar,
  Content,
  NameText,
  DateText,
  RightSection,
  AmountTextNew,
  StatusBadge,
  StatusTextNew,
} from '../styles';
import {TransactionIcon} from '../../../../assets/svg';
import { formatDate } from '../../../../utils/useGetMonthYear';

const Transactions = ({transactions}: {transactions: any[]}) => {
  return (
    <View>
      {transactions.map(transaction => (
        <CardContainer key={transaction._id}>
          <Avatar>
            <TransactionIcon />
          </Avatar>
          <Content>
            <NameText>
              {transaction?.ownerName}, Flat No : {transaction?.flatNumber}
            </NameText>
            <DateText>{formatDate(transaction.createdAt)}</DateText>
          </Content>
          <RightSection>
            <AmountTextNew>₹ {transaction?.amount}</AmountTextNew>
            <StatusBadge status={transaction.paymentStatus}>
              <StatusTextNew>{transaction?.paymentStatus}</StatusTextNew>
            </StatusBadge>
          </RightSection>
        </CardContainer>
      ))}
    </View>
  );
};

export default Transactions;
