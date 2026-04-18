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
  const [approvePayment, {isLoading}] = useApprovePaymentMutation();

  const handleApprove = async () => {
    try {
      await approvePayment({
        paymentId: item._id,
        status: 'APPROVED',
      }).unwrap();
      onApprovalComplete?.();
    } catch (error) {
      console.log('Approval error:', error);
    }
  };

  const handleReject = async () => {
    try {
      await approvePayment({
        paymentId: item._id,
        status: 'REJECTED',
      }).unwrap();
      onApprovalComplete?.();
    } catch (error) {
      console.log('Rejection error:', error);
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
              disabled={isLoading}
              onPress={handleReject}
              style={{flex: 1}}>
              <ButtonTitle>{isLoading ? 'Processing...' : 'Reject'}</ButtonTitle>
            </Button>

            <Button
              mode="contained"
              disabled={isLoading}
              onPress={handleApprove}
              style={{flex: 1}}>
              <ButtonTitle>{isLoading ? 'Processing...' : 'Approve'}</ButtonTitle>
            </Button>
          </>
        )}
      </ButtonRow>
    </Card>
  );
};
