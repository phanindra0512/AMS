// ServiceHubScreen.js
import React from 'react';
import {ScrollView, View, Linking} from 'react-native';
import {
  CallService,
  CallText,
  Card,
  Container,
  Divider,
  Fab,
  FabText,
  HeaderText,
  InfoRow,
  InfoText,
  Name,
  Section,
  SectionTitle,
} from './styles';
import {ActivityIndicator, Header} from '../../../components';
import {Phone, Service, Location, CallFilled} from '../../../assets/svg';
import {useGetAllServicesQuery} from '../../../api/services/service';
import {Overlay} from '../../../common/styles/commonStyles';
import {GlobalStore} from '../../../storage/stores';

const ServiceHub = ({navigation}: any) => {
  const ownerInfo = GlobalStore.ownerInfo.getValue('ownerInfo');

  const userRole = ownerInfo?.role;

  const {data, isLoading, isFetching} = useGetAllServicesQuery();

  const {data: services = [], totalServices = 0} = data || {};

  const handleNavigation = () => {
    navigation.navigate('AddService');
  };

  const groupedServices = services.reduce((acc: any, item: any) => {
    const key =
      item.serviceType === 'OTHER'
        ? item.customServiceType?.trim().toUpperCase() || 'OTHER'
        : item.serviceType;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);

    return acc;
  }, {});

  return (
    <>
      <Container>
        <Header>
          <HeaderText>Service Hub</HeaderText>
        </Header>
        <ScrollView>
          {Object.keys(groupedServices).map(category => (
            <View key={category}>
              <Section>
                <Service />
                <SectionTitle>{category}</SectionTitle>
              </Section>
              {groupedServices[category].map((item: any, index: any) => (
                <Card key={index}>
                  <Name>{item.serviceProviderName}</Name>
                  <InfoRow>
                    <Phone />
                    <InfoText>{item.mobileNumber}</InfoText>
                  </InfoRow>
                  <InfoRow>
                    <Location />
                    <InfoText>{item.location}</InfoText>
                  </InfoRow>
                  <Divider />

                  <CallService
                    onPress={() => Linking.openURL(`tel:${item.mobileNumber}`)}>
                    <CallFilled />
                    <CallText>Call for Service</CallText>
                  </CallService>
                </Card>
              ))}
            </View>
          ))}
        </ScrollView>
        {userRole === 'TREASURER' && (
          <Fab onPress={handleNavigation}>
            <FabText>+</FabText>
          </Fab>
        )}
      </Container>
      {(isLoading || isFetching) && (
        <Overlay>
          <ActivityIndicator />
        </Overlay>
      )}
    </>
  );
};

export default ServiceHub;
