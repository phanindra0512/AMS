import React from 'react';
import {FlatList, View} from 'react-native';
import {ActivityIndicator, Header} from '../../../components';
import {
  AmountText,
  Card,
  DateText,
  HeaderText,
  IconText,
  Label,
  MainContainer,
  NoTransactionContainer,
  PaidStatus,
  Row,
  SectionTitle,
  StatusText,
  Dots,
} from './styles';
import {TransactionCalendar, StatusSuccess} from '../../../assets/svg';
import GlobalStorage from '../../../storage';
import {useGetOwnerPaymentsQuery} from '../../../api/services/maintenance';
import {ProcessedPayment, Payment} from '../../../types/payment';
import {getMonthName, formatDate} from '../../../utils/useGetMonthYear';
import {Overlay} from '../../../common/styles/commonStyles';

type Section = {
  title: string;
  data: ProcessedPayment[];
};

const ViewReceipts = ({navigation}: any) => {
  const ownerInfo = GlobalStorage.get('ownerInfo');
  const owner = ownerInfo ? JSON.parse(ownerInfo) : null;
  const ownerId = owner?._id;

  const {data, isLoading, error} = useGetOwnerPaymentsQuery(ownerId || '', {
    skip: !ownerId,
  });

  const transactions: Payment[] = data?.data || [];

  const processedTransactions: ProcessedPayment[] = transactions.map(txn => ({
    id: txn._id,
    transactionId: txn.transactionId,
    amount: txn.amount.toString(),
    date: formatDate(txn.createdAt),
    status: txn.paymentStatus,
    monthYear: `${getMonthName(txn.month)} ${txn.year}`,
    paymentType: 'UPI',
    treasurerName: txn.treasurer.treasurerName,
    treasurerUPIId: txn.treasurer.treasurerUpiID,
  }));

  const handleGoback = () => {
    navigation.goBack();
  };

  const handleNavigation = (item: ProcessedPayment) => {
    navigation.navigate('TransactionDetails', {transactionData: item});
  };

  const groupedObj: Record<string, ProcessedPayment[]> =
    processedTransactions.reduce((acc, item) => {
      if (!acc[item.monthYear]) acc[item.monthYear] = [];
      acc[item.monthYear].push(item);
      return acc;
    }, {} as Record<string, ProcessedPayment[]>);

  const groupedData: Section[] = Object.entries(groupedObj).map(
    ([monthYear, data]) => ({
      title: monthYear,
      data,
    }),
  );

  const renderItem = ({item}: {item: ProcessedPayment}) => (
    <Card
      onPress={() => item.status === 'SUCCESS' && handleNavigation(item)}
      disabled={item.status !== 'SUCCESS'}>
      <Label>Transaction ID : {item.transactionId}</Label>
      <Dots />
      <Row>
        <Label>Total amount paid</Label>
        <AmountText>₹ {item.amount}</AmountText>
      </Row>

      <Row>
        <IconText>
          <TransactionCalendar />
          <DateText>{item.date}</DateText>
        </IconText>

        <PaidStatus>
          {item.status === 'SUCCESS' && <StatusSuccess />}
          <StatusText status={item.status}>{item.status}</StatusText>
        </PaidStatus>
      </Row>
    </Card>
  );

  const renderSection = ({item}: {item: Section}) => (
    <>
      <SectionTitle>{item.title}</SectionTitle>
      <FlatList
        data={item.data}
        keyExtractor={txn => txn.id}
        renderItem={renderItem}
        scrollEnabled={false}
      />
    </>
  );

  return (
    <>
      <MainContainer>
        <Header handleBack={handleGoback}>
          <HeaderText>Transaction History</HeaderText>
        </Header>

        {groupedData.length === 0 ? (
          <NoTransactionContainer>
            <Label>No Transaction Found</Label>
          </NoTransactionContainer>
        ) : (
          <FlatList
            data={groupedData}
            keyExtractor={item => item.title}
            renderItem={renderSection}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 16}}
          />
        )}
      </MainContainer>
      {isLoading && (
        <Overlay>
          <ActivityIndicator />
        </Overlay>
      )}
    </>
  );
};

export default ViewReceipts;
