import React, {useState} from 'react';
import {FlatList, View, Linking, Alert, Platform} from 'react-native';
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
  const owners = (data || []).filter(
    owner => owner.role === 'TREASURER' || owner.role === 'RESIDENT',
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleGoback = () => {
    navigation.goBack();
  };

  

  const handleInfoDetails = (owner: any) => {
    navigation.navigate('OwnerDetails', {ownerData: owner});
  };

  const handleOpenWhatsApp = async (owner: any) => {
    // Prefer opening a private chat with the owner's phone number.
    const rawNumber = (owner?.phoneNumber || '').replace(/[^0-9+]/g, '');
    if (!rawNumber) {
      Alert.alert('No phone', 'Owner phone number not available');
      return;
    }

    if (rawNumber) {
      // Ensure international format: if 10 digits, assume +91 (adjust if needed)
      let phone = rawNumber;
      const digitsOnly = rawNumber.replace(/[^0-9]/g, '');
      if (digitsOnly.length === 10) {
        phone = `91${digitsOnly}`; // change default country code if needed
      } else if (rawNumber.startsWith('+')) {
        phone = rawNumber.replace('+', '');
      }

      const urlScheme = `whatsapp://send?phone=${phone}`;
      const webUrl = `https://wa.me/${phone}`;
      try {
        const canOpen = await Linking.canOpenURL(urlScheme);
        if (canOpen) {
          await Linking.openURL(urlScheme);
          return;
        }

        await Linking.openURL(webUrl);
        return;
      } catch (err) {
        console.warn('Unable to open private chat:', err);
        Alert.alert('Unable to open WhatsApp', 'Please make sure WhatsApp is installed');
        return;
      }
    }

    
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
          <IconWrapper
            onPress={() => Linking.openURL(`tel:${item.phoneNumber}`)}>
            <CallIcon />
          </IconWrapper>
          <IconWrapper onPress={() => handleOpenWhatsApp(item)}>
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
