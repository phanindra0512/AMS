import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {
  Header,
  ActivityIndicator,
  SelectMonth,
  Calendar,
} from '../../../components';
import {HeaderText, TreasurerText} from './styles';
import {Overlay} from '../../../common/styles/commonStyles';
import {useModal} from '../../../utils/useModal';
import {getMonthYear, MONTHS} from '../../../utils/useGetMonthYear';
import {PaymentCard} from './components/PaymentCard';
import {useGetPaymentsByMonthYearQuery} from '../../../api/services/maintenance';
import MaintenanceBillDetails from '../../../components/MaintenanceBillDetails';

const PaymentApproval = ({navigation}: any) => {
  const {isVisible, showModal, dismissModal} = useModal();
  const {
    isVisible: isShowPaymentReceipt,
    showModal: showPaymentReceiptModal,
    dismissModal: dismissPaymentReceiptModal,
  } = useModal();
  const [isTreasurerLoading, setIsTreasurerLoading] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(getMonthYear().monthName);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedPaymentReceipt, setSelectedPaymentReceipt] = useState<{
    uri: string;
    name: string;
  } | null>(null);

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

  const handleApprovalComplete = () => {
    refetch();
  };

  return (
    <>
      <View style={{flex: 1}}>
        <Header handleBack={handleGoback}>
          <HeaderText>Payment Approval</HeaderText>
        </Header>
        <Calendar
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          onPress={showModal}
          onLoadingChange={setIsTreasurerLoading}
        />
        <View style={{flex: 1, padding: 16}}>
          {isPaymentsLoading ? null : paymentsData?.data &&
            paymentsData.data.length > 0 ? (
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
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#757575',
                  fontFamily: 'JosefinSans-Regular',
                }}>
                No transactions available
              </Text>
            </View>
          )}
        </View>
        <SelectMonth
          isVisible={isVisible}
          dismissModal={dismissModal}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />

        <MaintenanceBillDetails
          isVisible={isShowPaymentReceipt}
          dismissModal={dismissPaymentReceiptModal}
          uploadedImageUri={selectedPaymentReceipt?.uri}
        />
      </View>
      {(isPaymentsLoading || isTreasurerLoading) && (
        <Overlay>
          <ActivityIndicator />
        </Overlay>
      )}
    </>
  );
};

export default PaymentApproval;
