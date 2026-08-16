import React from 'react';
import {SectionList, View} from 'react-native';
import {Header, ActivityIndicator} from '../../../components';
import {ChevronRight, Floor, Phone} from '../../../assets/svg';
import {
  Badge,
  BadgeContainer,
  BadgeText,
  Card,
  HeaderText,
  Left,
  Row,
  SectionTitle,
  SubText,
  Title,
} from './styles';
import {useGetAllOwnersQuery} from '../../../api/services/owners';
import {
  NoDataContainer,
  NoDataLabel,
  Overlay,
} from '../../../common/styles/commonStyles';

const FlatDetails = ({navigation}: any) => {
  const {data, isLoading, error} = useGetAllOwnersQuery();
  const owners = (data || []).filter(
    owner => owner.role === 'TREASURER' || owner.role === 'RESIDENT',
  );
  const handleGoback = () => {
    navigation.goBack();
  };

  const handleNavigation = (item: any) => {
    navigation.navigate('OwnerDetails', {ownerData: item});
  };

  const sections = [
    {
      title: 'First Floor',
      data: owners.filter(o => o.floorNumber === '1'),
    },
    {
      title: 'Second Floor',
      data: owners.filter(o => o.floorNumber === '2'),
    },
    {
      title: 'Third Floor',
      data: owners.filter(o => o.floorNumber === '3'),
    },
    {
      title: 'Fourth Floor',
      data: owners.filter(o => o.floorNumber === '4'),
    },
  ].filter(section => section.data.length > 0);

  const renderItem = ({item}: any) => {
    const memberType = item.status === 'Rented' ? 'TENANT' : 'OWNER';
    return (
      <Card onPress={() => handleNavigation(item)}>
        <Left>
          <Title>
            #{item.flatNumber}, {item.name}
          </Title>

          <View style={{flexDirection: 'row'}}>
            <Row>
              <Phone />
              <SubText>{item.phoneNumber}</SubText>
            </Row>

            <Row>
              <Floor />
              <SubText>Floor {item.floorNumber}</SubText>
            </Row>
          </View>
          <BadgeContainer>
            <Badge type={memberType}>
              <BadgeText type={memberType}>
                {memberType}
              </BadgeText>
            </Badge>

            {(item.role === 'TREASURER' || item.role === 'ADMIN') && (
              <Badge type={item.role}>
                <BadgeText type={item.role}>
                  {item.role}
                </BadgeText>
              </Badge>
            )}
          </BadgeContainer>
        </Left>
        <ChevronRight />
      </Card>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header handleBack={handleGoback}>
        <HeaderText>Flat Details</HeaderText>
      </Header>

      <View style={{flex: 1, marginTop: 16}}>
        {isLoading ? null : sections.length === 0 ? (
          <NoDataContainer>
            <NoDataLabel>Owners not found</NoDataLabel>
          </NoDataContainer>
        ) : (
          <SectionList
            sections={sections}
            keyExtractor={item => item._id}
            renderItem={renderItem}
            renderSectionHeader={({section: {title}}) => (
              <SectionTitle>{title}</SectionTitle>
            )}
          />
        )}
      </View>
      {isLoading && (
        <Overlay>
          <ActivityIndicator />
        </Overlay>
      )}
    </View>
  );
};

export default FlatDetails;
