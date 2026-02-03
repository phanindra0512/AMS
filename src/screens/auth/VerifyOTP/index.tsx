import React, {useState} from 'react';
import {
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Button} from '../../../components';
import {
  SafeAreaContainer,
  OverlayContainer,
  ModalContainer,
  LogoContainer,
  ContentWrapper,
  Title,
  SubTitle,
  MobileNumber,
  StyledButton,
  ButtonTitle,
  CaptionText,
  HighlightText,
  StyledInput,
  Row,
} from '../Login/styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useVerifyOtp} from '../../../api/services/auth';
import ActivityIndicator from '../../../components/ActivityIndicator';
import {Overlay} from '../../../common/styles/commonStyles';
import {GlobalStore} from '../../../storage/stores';

const {height} = Dimensions.get('window');

const VerifyOTP = ({route, navigation}: any) => {
  const {OTP, phoneNumber} = route.params;
  const {verifyOtp, isLoading, error} = useVerifyOtp();
  const insets = useSafeAreaInsets();
  const iosStatusBarHeight = insets.top;
  const iosBottomHeight = insets.bottom;
  const androidStatusBarHeight = StatusBar?.currentHeight || 24;

  const handleVerification = async () => {
    console.log('OTP Verified Successfully', OTP, phoneNumber);
    try {
      const res = await verifyOtp({
        phoneNumber,
        otp: OTP,
      }).unwrap();

      console.log('OTP Verified Successfully', res);

      if (res.success) {
        const ownerInfo = {
          _id: res.owner._id,
          name: res.owner.name,
          phoneNumber: res.owner.phoneNumber,
          flatNumber: res.owner.flatNumber,
          floorNumber: res.owner.floorNumber,
          flatType: res.owner.flatType,
          status: res.owner.status,
          occupation: res.owner.occupation,
          upiID: res.owner.upiID,
          role: res.owner.role,
          familyDetails: res.owner.familyDetails,
        };

        GlobalStore.ownerInfo.setValue('ownerInfo', ownerInfo);
        navigation.reset({
          index: 0,
          routes: [{name: 'BottomTab'}],
        });
      }
    } catch (error) {
      console.error('Error verifying OTP', error);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
            keyboardShouldPersistTaps="handled">
            <ImageBackground
              source={require('../../../assets/images/home.jpg')}
              resizeMode="cover"
              style={{
                height:
                  Platform.OS === 'ios'
                    ? height - iosStatusBarHeight - iosBottomHeight
                    : height - androidStatusBarHeight,
              }}>
              <OverlayContainer>
                <ModalContainer>
                  <LogoContainer>
                    <Image
                      source={require('../../../assets/images/logo.png')}
                      style={{width: 90, height: 90, borderRadius: 50}}
                    />
                  </LogoContainer>
                  <ContentWrapper>
                    <Title>Verify Account!</Title>
                    <SubTitle>
                      Enter the verification code sent to{' '}
                      <MobileNumber>{phoneNumber}</MobileNumber>
                    </SubTitle>

                    <Row>
                      <StyledInput
                        placeholder="Enter Verification Code"
                        keyboardType="numeric"
                        autoCapitalize="none"
                        maxLength={6}
                        value={OTP}
                      />
                    </Row>
                    <CaptionText>
                      Didn't receive the code?{' '}
                      <HighlightText
                        onPress={() => console.log('Resend OTP pressed')}>
                        Resend
                      </HighlightText>
                    </CaptionText>
                    <StyledButton>
                      <Button
                        mode="contained"
                        disabled={isLoading || OTP?.length !== 6}
                        onPress={handleVerification}>
                        <ButtonTitle>VERIFY OTP</ButtonTitle>
                      </Button>
                    </StyledButton>
                  </ContentWrapper>
                </ModalContainer>
              </OverlayContainer>
            </ImageBackground>
          </ScrollView>
          {isLoading && (
            <Overlay>
              <ActivityIndicator />
            </Overlay>
          )}
        </KeyboardAvoidingView>
      </SafeAreaContainer>
    </SafeAreaProvider>
  );
};

export default VerifyOTP;
