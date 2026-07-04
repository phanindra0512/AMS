import React, {useState} from 'react';
import {
  AmountText,
  ButtonRow,
  ButtonTitle,
  Card,
  LinkText,
  Row,
  SubText,
  Title,
} from '../styles';
import {Button} from '../../../../components';
import {useApprovePaymentMutation} from '../../../../api/services/maintenance';

export const PaymentCard = ({item, onViewBill, onApprovalComplete}: any) => {
  const isApproved = item.paymentStatus === 'APPROVED';
  const isRejected = item.paymentStatus === 'REJECTED';
  const [approvePayment] = useApprovePaymentMutation();
  const [pendingAction, setPendingAction] = useState<'approve' | 'reject' | null>(null);

  const handleApprove = async () => {
    setPendingAction('approve');
    try {
      await approvePayment({
        paymentId: item._id,
        status: 'APPROVED',
      }).unwrap();
      onApprovalComplete?.();
    } catch (error) {
      console.log('Approval error:', error);
    } finally {
      setPendingAction(null);
    }
  };

  const handleReject = async () => {
    setPendingAction('reject');
    try {
      await approvePayment({
        paymentId: item._id,
        status: 'REJECTED',
      }).unwrap();
      onApprovalComplete?.();
    } catch (error) {
      console.log('Rejection error:', error);
    } finally {
      setPendingAction(null);
    }
  };

  return (
    <Card>
      <Title>
        # {item.flatNumber}, {item.ownerName}
      </Title>
      <SubText>Transaction ID : {item.transactionId}</SubText>

      <Row>
        <AmountText>Amount Paid : ₹{item.amount}</AmountText>
        <LinkText onPress={() => onViewBill(item.receiptUrl)}>
          View Bill
        </LinkText>
      </Row>

      <ButtonRow>
        {isApproved ? (
          <Button
            mode="contained"
            disabled
            style={{flex: 1}}>
            <ButtonTitle>Approved</ButtonTitle>
          </Button>
        ) : isRejected ? (
          <Button
            mode="contained"
            disabled
            style={{flex: 1, opacity: 0.5, backgroundColor: '#d32f2f'}}>
            <ButtonTitle>Rejected</ButtonTitle>
          </Button>
        ) : (
          <>
            <Button
              mode="outlined"
              disabled={Boolean(pendingAction)}
              onPress={handleReject}
              style={{flex: 1}}>
              <ButtonTitle>
                {pendingAction === 'reject' ? 'Processing...' : 'Reject'}
              </ButtonTitle>
            </Button>

            <Button
              mode="contained"
              disabled={Boolean(pendingAction)}
              onPress={handleApprove}
              style={{flex: 1}}>
              <ButtonTitle>
                {pendingAction === 'approve' ? 'Processing...' : 'Approve'}
              </ButtonTitle>
            </Button>
          </>
        )}
      </ButtonRow>
    </Card>
  );
};
