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

const Transactions = () => {
  return (
    <View>
      <CardContainer>
        <Avatar>
          <TransactionIcon />
        </Avatar>
        <Content>
          <NameText>Phani, Flat No : 201</NameText>
          <DateText>25th Jun, 2025</DateText>
        </Content>
        <RightSection>
          <AmountTextNew>₹ 1000</AmountTextNew>
          <StatusBadge color="#FB8C00">
            <StatusTextNew>Pending</StatusTextNew>
          </StatusBadge>
        </RightSection>
      </CardContainer>

      {/* Second transaction */}
      <CardContainer>
        <Avatar>
          <TransactionIcon />
        </Avatar>
        <Content>
          <NameText>Phani, Flat No : 201</NameText>
          <DateText>25th Jun, 2025</DateText>
        </Content>
        <RightSection>
          <AmountTextNew>₹ 1000</AmountTextNew>
          <StatusBadge color="#198754">
            <StatusTextNew>Success</StatusTextNew>
          </StatusBadge>
        </RightSection>
      </CardContainer>
    </View>
  );
};

export default Transactions;
