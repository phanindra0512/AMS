import React from 'react';
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

enum PaymentStatusEnum {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}
const Home = ({navigation}: any) => {
  const paymentStatus: string = PaymentStatusEnum.PENDING;

  const navigateToNotifications = () => {
    navigation.navigate('Notifications');
  };
  
  const handlePaymentNavigation = () => {
    if (paymentStatus === PaymentStatusEnum.PENDING) {
      navigation.navigate('PayMaintenance');
    } else if (paymentStatus === PaymentStatusEnum.COMPLETED) {
      navigation.navigate('ViewReceipts');
    } else if (paymentStatus === PaymentStatusEnum.FAILED) {
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
      case 'Add Expense':
        navigation.navigate('AddExpense');
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
      default:
        console.warn('Service not implemented yet.');
    }
  };

  return (
    <Container>
      <Header handleNavigation={navigateToNotifications} />
      <PaymentStatus
        paymentStatus={paymentStatus}
        handleNavigation={handlePaymentNavigation}
      />
      <ServicesContainer>
        <ServiceHeading>Resident Services</ServiceHeading>
        <FlatList
          data={SERVICES}
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={{justifyContent: 'space-between'}}
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
    </Container>
  );
};

export default Home;
