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
import {
  useGetPaymentsByMonthYearQuery,
  useGetTreasurerAmountQuery,
} from '../../../api/services/maintenance';
import {Overlay} from '../../../common/styles/commonStyles';

const ViewCollection = ({navigation}: any) => {
  const {isVisible, showModal, dismissModal} = useModal();
  const [selectedMonth, setSelectedMonth] = useState(getMonthYear().monthName);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [isTreasurerLoading, setIsTreasurerLoading] = useState(false);
  const monthNumber = MONTHS.indexOf(selectedMonth) + 1;

  const {
    data: paymentsData,
    isLoading: isPaymentsLoading,
    isFetching: isPaymentsFetching,
    refetch,
  } = useGetPaymentsByMonthYearQuery({
    month: monthNumber,
    year: selectedYear,
  });
  const {
    totalCollection = 0,
    totalExpenses = 0,
    totalPayments = 0,
  } = paymentsData || {};

  const {
    data: treasurerData,
    isLoading: isTreasurerDataLoading,
    isFetching: isTreasurerFetching,
  } = useGetTreasurerAmountQuery();

  const {treasurerAmount = 0} = treasurerData || {};

  const handleGoback = () => {
    navigation.goBack();
  };

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
          onLoadingChange={setIsTreasurerLoading}
        />
        <CollectionStatus
          totalTreasureAmount={treasurerAmount}
          totalCollectionAmount={totalCollection}
          expensesAmount={totalExpenses}
          totalPayments={totalPayments}
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
      {(isPaymentsLoading ||
        isPaymentsFetching ||
        isTreasurerLoading ||
        isTreasurerDataLoading ||
        isTreasurerFetching) && (
        <Overlay>
          <ActivityIndicator />
        </Overlay>
      )}
    </>
  );
};
export default ViewCollection;
