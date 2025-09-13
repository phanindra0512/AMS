import React from 'react';
import {View} from 'react-native';
import {
  HeaderText,
  ImageBlock,
  ProfileName,
  ProfileContainer,
  ProfileText,
  PayIdText,
  Container,
  Card,
  CardHeader,
  CardContent,
  Row,
  Label,
  Value,
  SectionText,
} from './styles';
import {Header} from '../../../components';
import {CopyIcon, ProfileFill} from '../../../assets/svg';

const OwnerDetails = ({navigation}: any) => {
  const handleGoback = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1}}>
      <Header handleBack={handleGoback}>
        <HeaderText>Owner Details</HeaderText>
      </Header>
      <ProfileContainer>
        <ImageBlock>
          <ProfileText>SR</ProfileText>
        </ImageBlock>
        <ProfileName>Srinivas Rao</ProfileName>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <PayIdText>9505876290@ybl</PayIdText>
          <CopyIcon />
        </View>
      </ProfileContainer>

      <Container>
        <Card>
          <CardHeader>
            <SectionText>Flat Details</SectionText>
          </CardHeader>
          <CardContent>
            <Row>
              <Label>Full Name</Label>
              <Value>Srinivas Rao</Value>
            </Row>
            <Row>
              <Label>Mobile Number</Label>
              <Value>9505876290</Value>
            </Row>
            <Row>
              <Label>Flat Number</Label>
              <Value>G1, First Floor</Value>
            </Row>
            <Row>
              <Label>Type</Label>
              <Value>2 bhk</Value>
            </Row>
            <Row>
              <Label>Status</Label>
              <Value>OWNER</Value>
            </Row>
            <Row>
              <Label>Occupation</Label>
              <Value>Tailor</Value>
            </Row>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <SectionText>Family Details</SectionText>
          </CardHeader>
          <CardContent>
            <Row>
              <Label>Spounce</Label>
              <Value>Lakshmi</Value>
            </Row>
            <Row>
              <Label>Childrens</Label>
              <Value>Riyanshika Devi, Pardhu</Value>
            </Row>
            <Row>
              <Label>Family Count</Label>
              <Value>5</Value>
            </Row>
          </CardContent>
        </Card>
      </Container>
    </View>
  );
};

export default OwnerDetails;
