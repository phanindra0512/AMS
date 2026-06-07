import React, {useState, useEffect} from 'react';
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
import {Button, StatusModal} from '../../../components';
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
import {useLoginSendOtp} from '../../../api/services/auth';
import ActivityIndicator from '../../../components/ActivityIndicator';
import {Overlay} from '../../../common/styles/commonStyles';
import {useModal} from '../../../utils/useModal';

const {height} = Dimensions.get('window');
type StatusType = 'success' | 'error';

const Login = ({navigation}: any) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalConfig, setModalConfig] = useState<{
    type: StatusType;
    title: string;
    message: string;
  }>({
    type: 'error',
    title: '',
    message: '',
  });
  const insets = useSafeAreaInsets();
  const iosStatusBarHeight = insets.top;
  const iosBottomHeight = insets.bottom;
  const androidStatusBarHeight = StatusBar?.currentHeight || 24;
  const {loginSendOtp, isLoading, isError} = useLoginSendOtp();
  const {isVisible, showModal, dismissModal} = useModal();

  // Handle error state
  useEffect(() => {
    if (isError) {
      setModalConfig({
        type: 'error',
        title: 'Login Failed',
        message: 'Please enter a valid mobile number and try again.',
      });
      showModal();
    }
  }, [isError]);

  const handleGenerateOTP = async () => {
    try {
      const resp = await loginSendOtp({phoneNumber}).unwrap();
      navigation.navigate('VerifyOTP', {
        OTP: resp.otp,
        phoneNumber: phoneNumber,
      });
    } catch (err) {
      // Error is handled by useEffect above
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
          <StatusModal
            visible={isVisible}
            type={modalConfig.type}
            title={modalConfig.title}
            message={modalConfig.message}
            onClose={dismissModal}
          />
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
