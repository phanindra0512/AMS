import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import Header from '../../../components/Header';
import {SelectMonth} from '../../../components';
import {
  CalendarContainer,
  CalendarText,
  HeaderText,
  TreasurerText,
} from './styles';
import {Calendar, Dropdown} from '../../../assets/svg';
import {useModal} from '../../../utils/useModal';
import {getMonthYear} from '../../../utils/useGetMonthYear';
import {PaymentCard} from './components/PaymentCard';
import {useGetTreasurerDetailsQuery} from '../../../api/services/treasurer';

const dummyData = [
  {
    id: '1',
    name: 'Ramesh Verma',
    flat: '201',
    transactionId: '202546879565',
    amount: '1,000',
    paymentStatus: 'PENDING',
  },
  {
    id: '2',
    name: 'Suresh Kumar',
    flat: '305',
    transactionId: '987654321234',
    amount: '2,000',
    paymentStatus: 'APPROVED',
  },
];

const PaymentApproval = ({navigation}: any) => {
  const {isVisible, showModal, dismissModal} = useModal();
  const [selectedMonth, setSelectedMonth] = useState(getMonthYear().monthName);
  const {month, year} = getMonthYear();
  const {data, isLoading, error} = useGetTreasurerDetailsQuery({
    month,
    year,
  });
  const treasurerDetails = data?.data;

  const handleGoback = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1}}>
      <Header handleBack={handleGoback}>
        <HeaderText>Pay Maintenance</HeaderText>
      </Header>
      <CalendarContainer onPress={showModal}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Calendar />
          <View>
            <CalendarText>Payments of month - {selectedMonth}</CalendarText>
            <TreasurerText>
              {isLoading
                ? 'Loading Treasurer details...'
                : `Treasurer : ${treasurerDetails?.name}, ${treasurerDetails?.flatNumber}`}
            </TreasurerText>
          </View>
        </View>
        <Dropdown />
      </CalendarContainer>
      <View style={{flex: 1, padding: 16}}>
        <FlatList
          data={dummyData}
          keyExtractor={item => item.id}
          renderItem={({item}) => <PaymentCard item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <SelectMonth
        isVisible={isVisible}
        dismissModal={dismissModal}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
    </View>
  );
};

export default PaymentApproval;
