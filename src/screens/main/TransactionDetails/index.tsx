import * as React from 'react';
import {View} from 'react-native';
import {Header} from '../../../components';
import {
  ActionButton,
  ActionLabel,
  ActionRow,
  Amount,
  Card,
  Container,
  DetailLabel,
  DetailRow,
  DetailValue,
  Divider,
  DividerDot,
  DividerWithDots,
  HeaderText,
  Label,
  Subtitle,
  ThankYouText,
  Title,
} from './styles';
import {
  DownloadReceipt,
  ShareReceipt,
  StatusSuccess,
} from '../../../assets/svg';

const TransactionDetails = ({navigation, route}: any) => {
  const { transactionData } = route.params;

  const handleGoback = () => {
    navigation.goBack();
  };

  return (
    <View style={{backgroundColor: '#636B2F', flex: 1}}>
      <Header handleBack={handleGoback}>
        <HeaderText>Transaction Details</HeaderText>
      </Header>

      <Container>
        <Card>
          <StatusSuccess width={50} height={50} />

          <Title>Payment Successful</Title>
          <Subtitle>Your payment was completed successfully</Subtitle>

          <DividerWithDots>
            <View style={{marginLeft: -8}}>
              <DividerDot />
            </View>

            <Divider
              style={{flex: 1, marginHorizontal: 8, marginVertical: 0}}
            />
            <View style={{marginRight: -8}}>
              <DividerDot />
            </View>
          </DividerWithDots>

          <Label>Total Payment</Label>
          <Amount>₹ {transactionData.amount}</Amount>

          <DetailRow>
            <DetailLabel>Transaction ID</DetailLabel>
            <DetailValue>{transactionData.transactionId}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Date</DetailLabel>
            <DetailValue>{transactionData.date}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Payment Type</DetailLabel>
            <DetailValue>{transactionData.paymentType}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Treasurer</DetailLabel>
            <DetailValue>{transactionData.treasurerName}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>UPI ID</DetailLabel>
            <DetailValue>{transactionData.treasurerUPIId}</DetailValue>
          </DetailRow>

          <Divider />

          <ThankYouText>Thank you for your payment!</ThankYouText>
        </Card>

        <ActionRow>
          <ActionButton>
            <DownloadReceipt />
            <ActionLabel>Download Receipt</ActionLabel>
          </ActionButton>
          <ActionButton>
            <ShareReceipt />
            <ActionLabel>Share Receipt</ActionLabel>
          </ActionButton>
        </ActionRow>
      </Container>
    </View>
  );
};

export default TransactionDetails;
