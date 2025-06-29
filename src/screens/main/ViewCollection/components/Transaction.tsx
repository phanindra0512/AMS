import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  CardContainer,
  Avatar,
  AvatarText,
  Content,
  NameText,
  DateText,
  RightSection,
  AmountTextNew,
  StatusBadge,
  StatusTextNew,
} from '../styles';

const Transactions = () => {
  return (
    <View>
      <CardContainer>
        <Avatar>
          <AvatarText>P</AvatarText>
        </Avatar>
        <Content>
          <NameText>Phani, Flat No : 201</NameText>
          <DateText>Date : 25-Jun-2025</DateText>
        </Content>
        <RightSection>
          <AmountTextNew>₹ 1000</AmountTextNew>
          <StatusBadge color="#FB8C00">
            <StatusTextNew>Pending</StatusTextNew>
          </StatusBadge>
        </RightSection>
      </CardContainer>

      <CardContainer>
        <Avatar>
          <AvatarText>P</AvatarText>
        </Avatar>
        <Content>
          <NameText>Phani, Flat No : 201</NameText>
          <DateText>Date : 25-Jun-2025</DateText>
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
