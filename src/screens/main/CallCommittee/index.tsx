import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {
  TitleText,
  Avatar,
  Card,
  ContactInfo,
  HeaderText,
  IconRow,
  IconWrapper,
  Initials,
  Name,
  PhoneText,
  Row,
} from './styles';
import {Header} from '../../../components';
import {CallIcon, InfoIcon, MessageIcon} from '../../../assets/svg';

const contacts = [
  {id: '1', name: 'Srinivas Rao', phone: '9505876290'},
  {id: '2', name: 'Srinivas Rao', phone: '9505876290'},
  {id: '3', name: 'Srinivas Rao', phone: '9505876290'},
];

const CallCommittee = ({navigation}: any) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleGoback = () => {
    navigation.goBack();
  };

  const handleInfoDetails = () => {
    navigation.navigate('OwnerDetails');
  };

  const handlePress = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const renderItem = ({item}: {item: (typeof contacts)[0]}) => (
    <Card onPress={() => handlePress(item.id)}>
      <Row>
        <Avatar>
          <Initials>
            {item.name
              .split(' ')
              .map(n => n[0])
              .join('')
              .slice(0, 2)}
          </Initials>
        </Avatar>
        <ContactInfo>
          <Name>{item.name}</Name>
          <PhoneText>{item.phone}</PhoneText>
        </ContactInfo>
      </Row>

      {expandedId === item.id && (
        <IconRow>
          <IconWrapper onPress={() => console.log('Call', item.phone)}>
            <CallIcon />
          </IconWrapper>
          <IconWrapper onPress={() => console.log('Message', item.phone)}>
            <MessageIcon />
          </IconWrapper>
          <IconWrapper onPress={handleInfoDetails}>
            <InfoIcon />
          </IconWrapper>
        </IconRow>
      )}
    </Card>
  );

  return (
    <View>
      <Header handleBack={handleGoback}>
        <HeaderText>Committee Contacts</HeaderText>
      </Header>
      <TitleText>Contacts</TitleText>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{marginTop: 12}}
      />
    </View>
  );
};

export default CallCommittee;
