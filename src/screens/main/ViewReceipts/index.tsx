import React from 'react';
import {FlatList, View} from 'react-native';
import {Header} from '../../../components';
import {
  AmountText,
  Card,
  DateText,
  HeaderText,
  IconText,
  Label,
  PaidStatus,
  Row,
  SectionTitle,
  StatusText,
  Dots,
} from './styles';
import {TransactionCalendar, StatusSuccess} from '../../../assets/svg';

const transactions = [
  {
    id: '1',
    monthYear: 'May 2025',
    transactionId: '202546879565',
    amount: '1,000',
    date: '12th May',
    status: 'Paid',
  },
  {
    id: '2',
    monthYear: 'April 2025',
    transactionId: '202546879565',
    amount: '1,000',
    date: '12th April',
    status: 'Paid',
  },
];

type Transaction = {
  id: string;
  monthYear: string;
  transactionId: string;
  amount: string;
  date: string;
  status: string;
};

type Section = {
  title: string;
  data: Transaction[];
};

const ViewReceipts = ({navigation}: any) => {
  const handleGoback = () => {
    navigation.goBack();
  };

  const handleNavigation = () => {
    navigation.navigate('TransactionDetails');
  };
  const groupedObj: Record<string, Transaction[]> = transactions.reduce(
    (acc, item) => {
      if (!acc[item.monthYear]) acc[item.monthYear] = [];
      acc[item.monthYear].push(item);
      return acc;
    },
    {} as Record<string, Transaction[]>,
  );

  const groupedData: Section[] = Object.entries(groupedObj).map(
    ([monthYear, data]) => ({
      title: monthYear,
      data,
    }),
  );

  const renderItem = ({item}: {item: (typeof transactions)[0]}) => (
    <Card onPress={handleNavigation}>
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
          <StatusSuccess />
          <StatusText>{item.status}</StatusText>
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
        scrollEnabled={false} // allow outer scroll
      />
    </>
  );

  return (
    <View>
      <Header handleBack={handleGoback}>
        <HeaderText>Transaction History</HeaderText>
      </Header>

      <FlatList
        data={groupedData}
        keyExtractor={item => item.title}
        renderItem={renderSection}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 20}}
      />
    </View>
  );
};

export default ViewReceipts;
