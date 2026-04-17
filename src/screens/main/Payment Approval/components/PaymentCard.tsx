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

export const PaymentCard = ({item, onViewBill}: any) => {
  const isApproved = item.paymentStatus === 'APPROVED';

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
        ) : (
          <>
            <Button
              mode="outlined"
              onPress={() => console.log('Rejected', item.id)}
              style={{flex: 1}}>
              <ButtonTitle>Reject</ButtonTitle>
            </Button>

            <Button
              mode="contained"
              onPress={() => console.log('Approved', item.id)}
              style={{flex: 1}}>
              <ButtonTitle>Approve</ButtonTitle>
            </Button>
          </>
        )}
      </ButtonRow>
    </Card>
  );
};
