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
import {GlobalStore} from '../../../storage/stores';

const OwnerDetails = ({navigation}: any) => {
  const OwnerDetails = GlobalStore.ownerInfo.getValue('ownerInfo');
  const childrens = OwnerDetails?.familyDetails?.children || [];
  const childrenNames = childrens?.map(child => child.name).join(', ');
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
        <ProfileName>{OwnerDetails?.name}</ProfileName>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <PayIdText>{OwnerDetails?.upiID}</PayIdText>
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
              <Value>{OwnerDetails?.name}</Value>
            </Row>
            <Row>
              <Label>Mobile Number</Label>
              <Value>{OwnerDetails?.phoneNumber}</Value>
            </Row>
            <Row>
              <Label>Flat Number</Label>
              <Value>{OwnerDetails?.flatNumber}</Value>
            </Row>
            <Row>
              <Label>Type</Label>
              <Value>{OwnerDetails?.flatType}</Value>
            </Row>
            <Row>
              <Label>Status</Label>
              <Value>{OwnerDetails?.status}</Value>
            </Row>
            <Row>
              <Label>Occupation</Label>
              <Value>{OwnerDetails?.occupation}</Value>
            </Row>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <SectionText>Family Details</SectionText>
          </CardHeader>
          <CardContent>
            <Row>
              <Label>Spouse</Label>
              <Value>{OwnerDetails?.familyDetails?.spouseName}</Value>
            </Row>
            <Row>
              <Label>Childrens</Label>
              <Value>{childrenNames || 'N/A'}</Value>
            </Row>
            <Row>
              <Label>Family Count</Label>
              <Value>{OwnerDetails?.familyDetails?.numberOfChildren}</Value>
            </Row>
          </CardContent>
        </Card>
      </Container>
    </View>
  );
};

export default OwnerDetails;
