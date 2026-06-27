import React from 'react';
import {View} from 'react-native';
import {
  ButtonTitle,
  CardContainer,
  IconContainer,
  OutlinedStyledButton,
  OutlinedStyledButtonText,
  PaymentStatusText,
  StyledButton,
  SubHeaderText,
} from '../styles';
import {Success, Warning} from '../../../../assets/svg';
import {getMonthYear} from '../../../../utils/useGetMonthYear';
import {MAINTENANCE_AMOUNT} from '../../../../constants/maintenance';

enum PaymentStatusEnum {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

const PaymentStatus = ({paymentStatus, handleNavigation}: any) => {
  const getMonthName = getMonthYear().monthName;
  const yearNumber = new Date().getFullYear();
  return (
    <CardContainer>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconContainer bg="#FFFFFF">
          {paymentStatus === PaymentStatusEnum.PENDING ? (
            <Warning />
          ) : (
            <Success />
          )}
        </IconContainer>
        <PaymentStatusText>
          {paymentStatus === PaymentStatusEnum.PENDING
            ? 'Payment Pending'
            : 'Maintenance Paid'}
        </PaymentStatusText>
      </View>
      <SubHeaderText color="#757575">
        {paymentStatus === PaymentStatusEnum.PENDING
          ? `Your maintenance fee of ₹${MAINTENANCE_AMOUNT.toLocaleString('en-IN')} for ${getMonthName} ${yearNumber} is pending.`
          : `Your maintenance payment of ₹${MAINTENANCE_AMOUNT.toLocaleString('en-IN')} for ${getMonthName} ${yearNumber} has been received. Thank you!`}
      </SubHeaderText>

      {paymentStatus === PaymentStatusEnum.PENDING ? (
        <StyledButton onPress={handleNavigation}>
          <ButtonTitle>Pay Now</ButtonTitle>
        </StyledButton>
      ) : (
        <OutlinedStyledButton onPress={handleNavigation}>
          <OutlinedStyledButtonText>View Receipt</OutlinedStyledButtonText>
        </OutlinedStyledButton>
      )}
    </CardContainer>
  );
};

export default PaymentStatus;
