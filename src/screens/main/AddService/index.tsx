import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import {
  ActivityIndicator,
  Button,
  DropdownField,
  Header,
  TextInput,
} from '../../../components';
import {
  ButtonTitle,
  HeaderText,
  Label,
  StyledButton,
  SubTitle,
  Title,
} from './styles';
import {useCreateServiceMutation} from '../../../api/services/service';
import {useModal} from '../../../utils/useModal';
import {StatusModal} from '../../../components';
import {Overlay} from '../../../common/styles/commonStyles';

const availableServices = [
  {label: 'Plumber', value: 'PLUMBER'},
  {label: 'Electrician', value: 'ELECTRICIAN'},
  {label: 'Carpenter', value: 'CARPENTER'},
  {label: 'Municipality', value: 'MUNICIPALITY'},
  {label: 'Other', value: 'OTHER'},
];

type StatusType = 'success' | 'error';

const AddService = ({navigation}: any) => {
  const [selectedService, setSelectedService] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [providerName, setProviderName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [modalConfig, setModalConfig] = useState<{
    type: StatusType;
    title: string;
    message: string;
  }>({
    type: 'success',
    title: '',
    message: '',
  });
  const {
    isVisible: isStatusVisible,
    showModal: showStatusModal,
    dismissModal: dismissStatusModal,
  } = useModal();

  const [createService, {isLoading}] = useCreateServiceMutation();

  const isFormValid =
    selectedService &&
    providerName.trim() &&
    mobileNumber.trim() &&
    location.trim() &&
    (selectedService !== 'OTHER' || serviceName.trim());

  const handleSubmit = async () => {
    try {
      const payload = {
        serviceType: selectedService,
        customServiceType: selectedService === 'OTHER' ? serviceName : '',
        serviceProviderName: providerName,
        mobileNumber,
        location,
      };
      console.log('Service payload:', payload);
      const response = await createService(payload).unwrap();

      console.log('Service Created', response);

      setModalConfig({
        type: 'success',
        title: 'Service Added',
        message: 'Service provider added successfully. The service is now available in the Service Hub.',
      });
      showStatusModal();
    } catch (error: any) {
      console.log('Add Service Error:', error);
      setModalConfig({
        type: 'error',
        title: 'Failed',
        message:
          error?.data?.message || 'Unable to add service provider. Please try again.',
      });
      showStatusModal();
    }
  };

  const closeStatusModal = () => {
    dismissStatusModal();
    if (modalConfig.type === 'success') {
      navigation.goBack();
    }
  };

  const handleGoback = () => {
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: '#F8F8F8'}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <Header handleBack={handleGoback}>
        <HeaderText>Add Service</HeaderText>
      </Header>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 24,
            paddingHorizontal: 20,
          }}
          keyboardShouldPersistTaps="handled">
          <Title>Service Provider Details</Title>
          <SubTitle>
            Fill in the contact and service details to make them available in
            the Service Hub.
          </SubTitle>

          <Label>Service Type</Label>
          <View style={{marginBottom: 12}}>
            <DropdownField
              data={availableServices}
              selectedValue={selectedService}
              placeholder="Select Service"
              onSelect={item => setSelectedService(item.value)}
            />
          </View>

          {selectedService === 'OTHER' && (
            <>
              <Label>Service Name</Label>
              <TextInput
                placeholder="Service Name (Ex: Plumber)"
                value={serviceName}
                onChangeText={setServiceName}
                activeOutlineColor="#E9E9E9"
                style={{marginBottom: 12}}
              />
            </>
          )}
          <Label>Name</Label>
          <TextInput
            placeholder="Service Provider Name"
            value={providerName}
            onChangeText={setProviderName}
            activeOutlineColor="#E9E9E9"
            style={{marginBottom: 12}}
          />

          <Label>Mobile Number</Label>
          <TextInput
            placeholder="Mobile Number"
            activeOutlineColor="#E9E9E9"
            style={{marginBottom: 12}}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />

          <Label>Location</Label>
          <TextInput
            placeholder="Location"
            activeOutlineColor="#E9E9E9"
            style={{marginBottom: 12}}
            value={location}
            onChangeText={setLocation}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
      <StyledButton>
        <Button
          mode="contained"
          onPress={handleSubmit}
          disabled={!isFormValid || isLoading}>
          <ButtonTitle>SUBMIT</ButtonTitle>
        </Button>
      </StyledButton>
      <StatusModal
        visible={isStatusVisible}
        type={modalConfig.type}
        title={modalConfig.title}
        message={modalConfig.message}
        onClose={closeStatusModal}
      />
      {isLoading && (
        <Overlay>
          <ActivityIndicator />
        </Overlay>
      )}
    </KeyboardAvoidingView>
  );
};

export default AddService;
