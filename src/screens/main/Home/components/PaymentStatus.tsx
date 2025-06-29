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

enum PaymentStatusEnum {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

const PaymentStatus = ({paymentStatus, handleNavigation}: any) => {
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
          ? 'You haven’t paid your ₹1500 maintenance for June 2025.'
          : 'You’ve paid ₹1500 for June 2025. Thank you!'}
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
