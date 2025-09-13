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

const TransactionDetails = ({navigation}: any) => {
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
          <Amount>₹ 1000</Amount>

          <DetailRow>
            <DetailLabel>Transaction ID</DetailLabel>
            <DetailValue>25052876522</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Date</DetailLabel>
            <DetailValue>25th June, 2025</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Payment Type</DetailLabel>
            <DetailValue>UPI</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Treasurer</DetailLabel>
            <DetailValue>Raju</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>UPI ID</DetailLabel>
            <DetailValue>9505876290@ybl</DetailValue>
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
