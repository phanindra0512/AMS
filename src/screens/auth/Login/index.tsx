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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
  CountryCodeContainer,
  CountryCode,
  StyledButton,
  ButtonTitle,
  CaptionText,
  HighlightText,
  StyledInput,
  Row,
} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GlobalStore} from '../../../storage/stores';
import {useLoginSendOtp} from '../../../api/services/auth';
import ActivityIndicator from '../../../components/ActivityIndicator';
import {Overlay} from '../../../common/styles/commonStyles';

const {height} = Dimensions.get('window');

const Login = ({navigation}: any) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const insets = useSafeAreaInsets();
  const iosStatusBarHeight = insets.top;
  const iosBottomHeight = insets.bottom;
  const androidStatusBarHeight = StatusBar?.currentHeight || 24;
  const {loginSendOtp, isLoading, error} = useLoginSendOtp();

  const handleGenerateOTP = async() => {
    try {
      const resp = await loginSendOtp({phoneNumber}).unwrap();
      console.log('Login send otp response ===> ', resp);
      if (resp.success) {
        navigation.navigate('VerifyOTP', {
          OTP: resp.otp,
          phoneNumber: phoneNumber,
        });
      }
    } catch (error) {
      console.error('Error in sending OTP ===> ', error);
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
                    <Title>Welcome!</Title>
                    <SubTitle>Enter your mobile number to get started</SubTitle>

                    <Row>
                      <CountryCodeContainer>
                        <CountryCode>+91</CountryCode>
                        <MaterialIcons
                          name="arrow-drop-down"
                          size={24}
                          color={'#CCC'}
                        />
                      </CountryCodeContainer>
                      <StyledInput
                        placeholder="Enter Mobile Number"
                        keyboardType="numeric"
                        autoCapitalize="none"
                        maxLength={10}
                        onChangeText={value => setPhoneNumber(value)}
                        value={phoneNumber}
                      />
                    </Row>
                    <StyledButton>
                      <Button
                        mode="contained"
                        disabled={isLoading || phoneNumber.length !== 10}
                        onPress={handleGenerateOTP}>
                        <ButtonTitle>GENERATE OTP</ButtonTitle>
                      </Button>
                    </StyledButton>
                    <CaptionText>
                      New Tenant?{' '}
                      <HighlightText
                        onPress={() => console.log('Contact Admin pressed')}>
                        Contact Admin
                      </HighlightText>
                    </CaptionText>
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

export default Login;
