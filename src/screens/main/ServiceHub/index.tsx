// ServiceHubScreen.js
import React from 'react';
import {ScrollView, View} from 'react-native';
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
import {Header} from '../../../components';
import {Phone, Service, Location, CallFilled} from '../../../assets/svg';

const servicesData: any = [
  {
    id: '1',
    type: 'PLUMBER',
    name: 'Ramesh Verma',
    phone: '9505676290',
    area: 'Satramapadu',
    city: 'Eluru',
  },
  {
    id: '2',
    type: 'PLUMBER',
    name: 'Suresh Yadav',
    phone: '9876543210',
    area: 'R.R. Pet',
    city: 'Eluru',
  },
  {
    id: '3',
    type: 'CARPENTER',
    name: 'Mahesh Gupta',
    phone: '9564789123',
    area: 'Powerpet',
    city: 'Eluru',
  },
  {
    id: '4',
    type: 'CARPENTER',
    name: 'Naresh Kumar',
    phone: '9234567890',
    area: 'Ashok Nagar',
    city: 'Eluru',
  },
];

const ServiceHub = ({navigation}: any) => {
  const handleNavigation = () => {
    navigation.navigate('AddService');
  };

  const groupedServices = servicesData.reduce((acc: any, item: any) => {
    acc[item.type] = acc[item.type] ? [...acc[item.type], item] : [item];
    return acc;
  }, {});

  return (
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
                <Name>{item.name}</Name>
                <InfoRow>
                  <Phone />
                  <InfoText>{item?.phone}</InfoText>
                </InfoRow>
                <InfoRow>
                  <Location />
                  <InfoText>
                    {item?.area}, {item?.city}
                  </InfoText>
                </InfoRow>
                <Divider />

                <CallService>
                  <CallFilled />
                  <CallText>Call for Service</CallText>
                </CallService>
              </Card>
            ))}
          </View>
        ))}
      </ScrollView>

      <Fab onPress={handleNavigation}>
        <FabText>+</FabText>
      </Fab>
    </Container>
  );
};

export default ServiceHub;
