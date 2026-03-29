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
import {ActivityIndicator, Header} from '../../../components';
import {CallIcon, InfoIcon, MessageIcon} from '../../../assets/svg';
import {useGetAllOwnersQuery} from '../../../api/services/owners';
import {
  NoDataContainer,
  NoDataLabel,
  Overlay,
} from '../../../common/styles/commonStyles';
import {getInitials} from '../../../utils/getInitials';

const CallCommittee = ({navigation}: any) => {
  const {data, isLoading, error} = useGetAllOwnersQuery();
  const owners = data || [];
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleGoback = () => {
    navigation.goBack();
  };

  const handleInfoDetails = (owner: any) => {
    navigation.navigate('OwnerDetails', {ownerData: owner});
  };

  const handlePress = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const renderItem = ({item}: {item: any}) => (
    <Card onPress={() => handlePress(item._id)}>
      <Row>
        <Avatar>
          <Initials>{getInitials(item.name)}</Initials>
        </Avatar>
        <ContactInfo>
          <Name>{item.name}</Name>
          <PhoneText>{item.phoneNumber}</PhoneText>
        </ContactInfo>
      </Row>

      {expandedId === item._id && (
        <IconRow>
          <IconWrapper onPress={() => console.log('Call', item.phone)}>
            <CallIcon />
          </IconWrapper>
          <IconWrapper onPress={() => console.log('Message', item.phone)}>
            <MessageIcon />
          </IconWrapper>
          <IconWrapper onPress={() => handleInfoDetails(item)}>
            <InfoIcon />
          </IconWrapper>
        </IconRow>
      )}
    </Card>
  );

  return (
    <View style={{flex: 1}}>
      <Header handleBack={handleGoback}>
        <HeaderText>Committee Contacts</HeaderText>
      </Header>

      {owners.length === 0 ? (
        <NoDataContainer>
          <NoDataLabel>Owners not found</NoDataLabel>
        </NoDataContainer>
      ) : (
        <>
          <TitleText>Contacts</TitleText>
          <FlatList
            data={owners}
            keyExtractor={item => item._id}
            renderItem={renderItem}
            contentContainerStyle={{marginTop: 12}}
          />
        </>
      )}

      {isLoading && (
        <Overlay>
          <ActivityIndicator />
        </Overlay>
      )}
    </View>
  );
};

export default CallCommittee;
