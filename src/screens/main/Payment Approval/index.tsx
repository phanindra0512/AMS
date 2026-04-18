import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {Header, ActivityIndicator} from '../../../components';
import {SelectMonth} from '../../../components';
import {
  CalendarContainer,
  CalendarText,
  HeaderText,
  TreasurerText,
} from './styles';
import {Overlay} from '../../../common/styles/commonStyles';
import {Calendar, Dropdown} from '../../../assets/svg';
import {useModal} from '../../../utils/useModal';
import {getMonthYear, MONTHS} from '../../../utils/useGetMonthYear';
import {PaymentCard} from './components/PaymentCard';
import {useGetTreasurerDetailsQuery} from '../../../api/services/treasurer';
import {useGetPaymentsByMonthYearQuery} from '../../../api/services/maintenance';
import MaintenanceBillDetails from '../../../components/MaintenanceBillDetails';

const PaymentApproval = ({navigation}: any) => {
  const {isVisible, showModal, dismissModal} = useModal();
  const {
    isVisible: isShowPaymentReceipt,
    showModal: showPaymentReceiptModal,
    dismissModal: dismissPaymentReceiptModal,
  } = useModal();

  const [selectedMonth, setSelectedMonth] = useState(getMonthYear().monthName);
  const [selectedPaymentReceipt, setSelectedPaymentReceipt] = useState<{uri: string; name: string} | null>(null);
  const [isMonthChanging, setIsMonthChanging] = useState(false);
  const {year} = getMonthYear();

  const monthNumber = MONTHS.indexOf(selectedMonth) + 1;

  const {data, isLoading} = useGetTreasurerDetailsQuery({
    month: monthNumber,
    year,
  });
  
  const {
    data: paymentsData,
    isLoading: isPaymentsLoading,
    refetch,
  } = useGetPaymentsByMonthYearQuery({
    month: monthNumber,
    year,
  });

  const treasurerDetails = data?.data;

  const handleGoback = () => {
    navigation.goBack();
  };

  const handleApprovalComplete = () => {
    refetch();
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
        {isLoading || isPaymentsLoading || isMonthChanging ? (
          null
        ) : paymentsData?.data && paymentsData.data.length > 0 ? (
          <FlatList
            data={paymentsData.data}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
              <PaymentCard
                item={item}
                onViewBill={(receiptUrl: string) => {
                  setSelectedPaymentReceipt({
                    uri: receiptUrl,
                    name: `Receipt - Flat ${item.flatNumber}`,
                  });
                  showPaymentReceiptModal();
                }}
                onApprovalComplete={handleApprovalComplete}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 16, color: '#757575', fontFamily: 'JosefinSans-Regular'}}>
              No transactions available
            </Text>
          </View>
        )}
      </View>
      <SelectMonth
        isVisible={isVisible}
        dismissModal={dismissModal}
        selectedMonth={selectedMonth}
        setSelectedMonth={(month: string) => {
          setIsMonthChanging(true);
          setSelectedMonth(month);
          setTimeout(() => setIsMonthChanging(false), 500);
        }}
      />

      <MaintenanceBillDetails
        isVisible={isShowPaymentReceipt}
        dismissModal={dismissPaymentReceiptModal}
        uploadedImageUri={selectedPaymentReceipt?.uri}
      />

      {isLoading || isPaymentsLoading || isMonthChanging ? (
        <Overlay>
          <ActivityIndicator />
        </Overlay>
      ) : null}
    </View>
  );
};

export default PaymentApproval;
