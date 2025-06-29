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

const {height} = Dimensions.get('window');

const VerifyOTP = ({navigation}: any) => {
  const insets = useSafeAreaInsets();
  const iosStatusBarHeight = insets.top;
  const iosBottomHeight = insets.bottom;
  const androidStatusBarHeight = StatusBar?.currentHeight || 24;

  const handleVerification = () => {
    navigation.navigate('BottomTab');
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
                      <MobileNumber>9505876290</MobileNumber>
                    </SubTitle>

                    <Row>
                      <StyledInput
                        placeholder="Enter Verification Code"
                        keyboardType="numeric"
                        autoCapitalize="none"
                        maxLength={6}
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
                      <Button mode="contained" onPress={handleVerification}>
                        <ButtonTitle>VERIFY OTP</ButtonTitle>
                      </Button>
                    </StyledButton>
                  </ContentWrapper>
                </ModalContainer>
              </OverlayContainer>
            </ImageBackground>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaContainer>
    </SafeAreaProvider>
  );
};

export default VerifyOTP;
