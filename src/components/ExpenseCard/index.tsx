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
import {ExpenseIcon} from '../../assets/svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ExpenseCardProps {
  title: string;
  name: string;
  phone: string;
  amount: string;
  date: string;
  paidBy: string;
  userRole: string | undefined;
}

const ExpenseCard = ({
  title,
  name,
  phone,
  amount,
  date,
  paidBy,
  userRole,
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
        <MaterialIcons name="remove-red-eye" size={18} color={'#FFF'} />
        {userRole === 'TREASURER' && (
          <MaterialIcons name="delete" size={18} color={'#FFF'} />
        )}
      </FloatingActionButton>
    </CardWrapper>
  );
};

export default ExpenseCard;
