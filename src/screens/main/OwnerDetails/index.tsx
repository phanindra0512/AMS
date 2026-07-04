import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
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
  LogoutText,
} from './styles';
import {Header} from '../../../components';
import ActivityIndicator from '../../../components/ActivityIndicator';
import {CopyIcon, ProfileFill} from '../../../assets/svg';
import {GlobalStore} from '../../../storage/stores';
import GlobalStorage from '../../../storage';
import {getInitials} from '../../../utils/getInitials';
import {reset} from '../../../utils/navigationRef';
import { Overlay } from '../../../common/styles/commonStyles';

const OwnerDetails = ({navigation, route}: any) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const OwnerDetails =
    route?.params?.ownerData || GlobalStore.ownerInfo.getValue('ownerInfo');
  const isProfileTabView = route?.name === 'Profile';
  const childrens = OwnerDetails?.familyDetails?.children || [];
  const childrenNames = childrens?.map((child: any) => child.name).join(', ');
  const handleGoback = () => {
    navigation.goBack();
  };

  const handleLogout = () => {
    setIsLoggingOut(true);
    GlobalStore.userToken.delete();
    GlobalStore.ownerInfo.delete();
    GlobalStorage.clearAll();

    setTimeout(() => {
      reset('Login');
    }, 3000);
  };

  return (
    <View style={{flex: 1}}>
      <Header handleBack={handleGoback}>
        <HeaderText>Owner Details</HeaderText>
      </Header>
      <ProfileContainer>
        <ImageBlock>
          <ProfileText>{getInitials(OwnerDetails?.name)}</ProfileText>
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

        {isProfileTabView && (
          <TouchableOpacity onPress={handleLogout}>
            <LogoutText>Logout</LogoutText>
          </TouchableOpacity>
        )}
      </Container>

      {isLoggingOut && (
        <Overlay>
          <ActivityIndicator />
        </Overlay>
      )}
    </View>
  );
};

export default OwnerDetails;
