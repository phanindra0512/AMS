import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Header,
  SelectMonth,
  Calendar,
  ActivityIndicator,
} from '../../../components';
import {HeaderText, Label, NoTransactionContainer} from './styles';
import CollectionStatus from './components/CollectionStatus';
import Transactions from './components/Transaction';
import {useModal} from '../../../utils/useModal';
import {getMonthYear, MONTHS} from '../../../utils/useGetMonthYear';
import {useGetPaymentsByMonthYearQuery} from '../../../api/services/maintenance';
import {Overlay} from '../../../common/styles/commonStyles';

const ViewCollection = ({navigation}: any) => {
  const {isVisible, showModal, dismissModal} = useModal();
  const [selectedMonth, setSelectedMonth] = useState(getMonthYear().monthName);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const monthNumber = MONTHS.indexOf(selectedMonth) + 1;

  const {
    data: paymentsData,
    isLoading: isPaymentsLoading,
    refetch,
  } = useGetPaymentsByMonthYearQuery({
    month: monthNumber,
    year: selectedYear,
  });

  const handleGoback = () => {
    navigation.goBack();
  };

  const TOTAL_TREASURE_AMOUNT = 9000;
  const TOTAL_COLLECTION_AMOUNT = paymentsData?.totalAmount;
  const EXPENSES_AMOUNT = 0;
  const TOTAL_PAYMENTS = paymentsData?.totalPayments || 0;

  return (
    <>
      <View style={{flex: 1}}>
        <Header handleBack={handleGoback}>
          <HeaderText>View Collection</HeaderText>
        </Header>
        <Calendar
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          onPress={showModal}
        />
        <CollectionStatus
          totalTreasureAmount={TOTAL_TREASURE_AMOUNT}
          totalCollectionAmount={TOTAL_COLLECTION_AMOUNT}
          expensesAmount={EXPENSES_AMOUNT}
          totalPayments={TOTAL_PAYMENTS}
        />
        {isPaymentsLoading ? null : paymentsData?.data.length === 0 ? (
          <NoTransactionContainer>
            <Label>No Transaction Found</Label>
          </NoTransactionContainer>
        ) : (
          <Transactions transactions={paymentsData?.data || []} />
        )}

        <SelectMonth
          isVisible={isVisible}
          dismissModal={dismissModal}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </View>
      {isPaymentsLoading && (
        <Overlay>
          <ActivityIndicator />
        </Overlay>
      )}
    </>
  );
};
export default ViewCollection;
