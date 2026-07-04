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
import {Success, Warning, Error} from '../../../../assets/svg';
import {getMonthYear} from '../../../../utils/useGetMonthYear';
import {MAINTENANCE_AMOUNT} from '../../../../constants/maintenance';
import {PaymentStatusEnum} from '../../../../constants/paymentStatus';

const PaymentStatus = ({paymentStatus, handleNavigation}: any) => {
  const getMonthName = getMonthYear().monthName;
  const yearNumber = new Date().getFullYear();
  const isRejected = paymentStatus === PaymentStatusEnum.REJECTED;
  const isPending = paymentStatus === PaymentStatusEnum.PENDING;

  return (
    <CardContainer>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconContainer bg="#FFFFFF">
          {isPending ? (
            <Warning />
          ) : isRejected ? (
            <Error />
          ) : (
            <Success />
          )}
        </IconContainer>
        <PaymentStatusText>
          {isPending
            ? 'Payment Pending'
            : isRejected
              ? 'Payment Rejected'
              : 'Maintenance Paid'}
        </PaymentStatusText>
      </View>
      <SubHeaderText color="#757575">
        {isPending
          ? `Your maintenance fee of ₹${MAINTENANCE_AMOUNT.toLocaleString('en-IN')} for ${getMonthName} ${yearNumber} is pending.`
          : isRejected
            ? `Your maintenance payment of ₹${MAINTENANCE_AMOUNT.toLocaleString('en-IN')} for ${getMonthName} ${yearNumber} was rejected by the treasurer.`
            : `Your maintenance payment of ₹${MAINTENANCE_AMOUNT.toLocaleString('en-IN')} for ${getMonthName} ${yearNumber} has been received. Thank you!`}
      </SubHeaderText>

      {isPending ? (
        <StyledButton onPress={handleNavigation}>
          <ButtonTitle>Pay Now</ButtonTitle>
        </StyledButton>
      ) : isRejected ? (
        <StyledButton onPress={handleNavigation}>
          <ButtonTitle>Pay Again</ButtonTitle>
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
