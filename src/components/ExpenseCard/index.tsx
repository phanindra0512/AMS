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
import {Expense} from '../../types/expenses';
import {formatDateWithYear} from '../../utils/useGetMonthYear';
import {toTitleCase} from '../../utils/toTitleCase';
import {TouchableOpacity} from 'react-native';

const ExpenseCard = ({
  data,
  userRole,
  onView,
}: {
  data: Expense;
  userRole?: string;
  onView: () => void;
}) => {
  const {
    serviceType,
    serviceProviderName,
    contactNumber,
    amountPaid,
    createdAt,
    treasurer,
  } = data;

  return (
    <CardWrapper>
      <Row>
        <Left>
          <TitleRow>
            <ExpenseIcon />
            <TitleText>{toTitleCase(serviceType)}</TitleText>
          </TitleRow>
          <SubText>
            {serviceProviderName}, {contactNumber}
          </SubText>
          <SubText>Paid : ₹ {amountPaid.toLocaleString('en-IN')}</SubText>
        </Left>

        <Right>
          <DateText>{formatDateWithYear(createdAt)}</DateText>
          <PaidByText>Paid By : {treasurer?.treasurerName}</PaidByText>
        </Right>
      </Row>

      <FloatingActionButton>
        <TouchableOpacity onPress={onView}>
          <MaterialIcons name="remove-red-eye" size={18} color={'#FFF'} />
        </TouchableOpacity>
        {userRole === 'TREASURER' && (
          <MaterialIcons name="delete" size={18} color={'#FFF'} />
        )}
      </FloatingActionButton>
    </CardWrapper>
  );
};

export default ExpenseCard;
