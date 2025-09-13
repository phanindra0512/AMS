import React from 'react';
import {FlatList, View} from 'react-native';
import {Header} from '../../../components';
import {ChevronRight, Floor, Phone} from '../../../assets/svg';
import {
  Card,
  HeaderText,
  Left,
  Row,
  SectionTitle,
  SubText,
  Title,
} from './styles';
import {flats} from '../../../constants/flatDetails';

const FlatDetails = ({navigation}: any) => {
  const handleGoback = () => {
    navigation.goBack();
  };

  const handleNavigation = () => {
    navigation.navigate('OwnerDetails');
  };
  const renderItem = ({item}: any) => (
    <Card onPress={handleNavigation}>
      <Left>
        <Title>
          {item.number}, {item.name}
        </Title>
        <View style={{flexDirection: 'row'}}>
          <Row>
            <Phone />
            <SubText>{item.phone}</SubText>
          </Row>
          <Row>
            <Floor />
            <SubText>{item.floor}</SubText>
          </Row>
        </View>
      </Left>
      <ChevronRight />
    </Card>
  );

  return (
    <View>
      <Header handleBack={handleGoback}>
        <HeaderText>Flat Details</HeaderText>
      </Header>

      <View style={{marginTop: 16}}>
        <SectionTitle>Ground Floor</SectionTitle>
        <FlatList
          data={flats.filter(f => f.floor === 'Ground floor')}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />

        <SectionTitle>First Floor</SectionTitle>
        <FlatList
          data={flats.filter(f => f.floor === 'First floor')}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default FlatDetails;
