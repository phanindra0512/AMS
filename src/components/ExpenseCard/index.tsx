import React from 'react';
import {
  CardWrapper,
  DateText,
  FloatingActionButton,
  Left,
  PaidByText,
  Right,
  Row,
  SubText,
  TitleRow,
  TitleText,
} from './styles';
import {Delete, Edit, ExpenseIcon} from '../../assets/svg';
import {Text, View} from 'react-native';

interface ExpenseCardProps {
  title: string;
  name: string;
  phone: string;
  amount: string;
  date: string;
  paidBy: string;
}

const ExpenseCard = ({
  title,
  name,
  phone,
  amount,
  date,
  paidBy,
}: ExpenseCardProps) => {
  return (
    <CardWrapper>
      <Row>
        <Left>
          <TitleRow>
            <ExpenseIcon />
            <TitleText>{title}</TitleText>
          </TitleRow>
          <SubText>
            {name}, {phone}
          </SubText>
          <SubText>Paid : ₹ {amount}</SubText>
        </Left>

        <Right>
          <DateText>{date}</DateText>
          <PaidByText>Paid By : {paidBy}</PaidByText>
        </Right>
      </Row>

      <FloatingActionButton>
        <Edit />
        <Delete />
      </FloatingActionButton>
    </CardWrapper>
  );
};

export default ExpenseCard;
