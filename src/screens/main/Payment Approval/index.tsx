import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
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
import {getMonthYear} from '../../../utils/useGetMonthYear';
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
  const {month, year} = getMonthYear();
  const {data, isLoading, error} = useGetTreasurerDetailsQuery({
    month,
    year,
  });
console.log("selectedPaymentReceipt",selectedPaymentReceipt);

  const {
    data: paymentsData,
    isLoading: isPaymentsLoading,
    error: paymentsError,
  } = useGetPaymentsByMonthYearQuery({
    month: month,
    year: year,
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
          data={paymentsData?.data || []}
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
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <SelectMonth
        isVisible={isVisible}
        dismissModal={dismissModal}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />

      <MaintenanceBillDetails
        isVisible={isShowPaymentReceipt}
        dismissModal={dismissPaymentReceiptModal}
        uploadedImageUri={selectedPaymentReceipt?.uri}
      />

      {isLoading || isPaymentsLoading ? (
        <Overlay>
          <ActivityIndicator />
        </Overlay>
      ) : null}
    </View>
  );
};

export default PaymentApproval;
