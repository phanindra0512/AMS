import React, {useMemo, useState} from 'react';
import {
  Container,
  ServiceCard,
  ServiceContainer,
  ServiceHeading,
  ServicesContainer,
  ServiceText,
} from './styles';
import PaymentStatus from './components/PaymentStatus';
import Header from './components/Header';
import {Image, FlatList} from 'react-native';
import {SERVICES} from '../../../constants/services';
import GlobalStorage from '../../../storage';
import {TreasureModal} from '../../../components';
import {useModal} from '../../../utils/useModal';
import {
  useGetPaymentsByMonthYearQuery,
  useGetTreasurerAmountQuery,
} from '../../../api/services/maintenance';
import {getMonthYear, MONTHS} from '../../../utils/useGetMonthYear';
import {PaymentStatusEnum} from '../../../constants/paymentStatus';

const Home = ({navigation}: any) => {
  const getMonthName = getMonthYear().monthName;
  const yearNumber = new Date().getFullYear();
  const monthNumber = MONTHS.indexOf(getMonthName) + 1;

  const {
    isVisible: isTreasureVisible,
    showModal: showTreasureModal,
    dismissModal: dismissTreasureModal,
  } = useModal();

  const {
    data: treasurerData,
    isLoading: isTreasurerDataLoading,
    isFetching: isTreasurerFetching,
  } = useGetTreasurerAmountQuery();

  const {
    data: paymentsData,
    isLoading: isPaymentsLoading,
    isFetching: isPaymentsFetching,
    refetch,
  } = useGetPaymentsByMonthYearQuery({
    month: monthNumber,
    year: yearNumber,
  });

  const ownerInfo = GlobalStorage.get('ownerInfo');
  const owner = ownerInfo ? JSON.parse(ownerInfo) : null;
  const userRole = owner?.role;
  const userId = owner?._id;

  const myPayment = useMemo(() => {
    return paymentsData?.data?.find(payment => payment.ownerId === userId);
  }, [paymentsData, userId]);

  const paymentStatus = myPayment?.paymentStatus ?? PaymentStatusEnum.PENDING;

  const filteredServices = useMemo(() => {
    return SERVICES.filter(
      service => service.roles && service.roles.includes(userRole),
    );
  }, [userRole]);

  const handleHeaderRightPress = () => {
    showTreasureModal();
  };

  const handlePaymentNavigation = () => {
    if (paymentStatus === PaymentStatusEnum.PENDING) {
      navigation.navigate('PayMaintenance');
    } else if (paymentStatus === PaymentStatusEnum.APPROVED) {
      navigation.navigate('ViewReceipts');
    } else {
      console.warn('Payment status not recognized.');
    }
  };
  const handleServiceNavigation = (service: any) => {
    switch (service.name) {
      case 'View Collection':
        navigation.navigate('ViewCollection');
        break;
      case 'View Expenses':
        navigation.navigate('ViewExpense');
        break;
      case 'Pay Maintenance':
        navigation.navigate('PayMaintenance');
        break;
      case 'Announcement':
        navigation.navigate('Announcement');
        break;
      case 'View Receipts':
        navigation.navigate('ViewReceipts');
        break;
      case 'Flat Details':
        navigation.navigate('FlatDetails');
        break;
      case 'Call Committee':
        navigation.navigate('CallCommittee');
        break;
      case 'Payment Approvals':
        navigation.navigate('PaymentApproval');
        break;
      default:
        console.warn('Service not implemented yet.');
    }
  };

  return (
    <>
      <Container>
        <Header
          handleNavigation={handleHeaderRightPress}
          treasurerData={treasurerData}
        />
        <PaymentStatus
          paymentStatus={paymentStatus}
          handleNavigation={handlePaymentNavigation}
        />
        <ServicesContainer>
          <ServiceHeading>Resident Services</ServiceHeading>
          <FlatList
            data={filteredServices}
            keyExtractor={item => item.id}
            numColumns={3}
            // columnWrapperStyle={{justifyContent: 'center'}}
            renderItem={({item}) => (
              <ServiceContainer onPress={() => handleServiceNavigation(item)}>
                <ServiceCard>
                  <Image
                    source={item.image}
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: 'contain',
                      tintColor: '#636b2f',
                    }}
                  />
                </ServiceCard>
                <ServiceText>{item.name}</ServiceText>
              </ServiceContainer>
            )}
          />
        </ServicesContainer>
        <TreasureModal
          visible={isTreasureVisible}
          onClose={dismissTreasureModal}
          treasurerData={treasurerData}
        />
      </Container>
    </>
  );
};

export default Home;
