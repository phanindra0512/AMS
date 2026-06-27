import React, {useCallback, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import {
  Button,
  DropdownField,
  Header,
  MaintenanceBillDetails,
  TextInput,
  ActivityIndicator,
} from '../../../components';
import {
  ActionsContainer,
  ButtonTitle,
  Container,
  DottedUploadBox,
  HeaderText,
  InfoText,
  Label,
  StyledButton,
  SubTitle,
  SuccessBlock,
  SuccessText,
  Title,
} from './styles';
import {Close, Eye, Upload} from '../../../assets/svg';
import {launchImageLibrary} from 'react-native-image-picker';
import {getMonthYear} from '../../../utils/useGetMonthYear';
import {useModal} from '../../../utils/useModal';
import {useAddExpensesMutation} from '../../../api/services/expenses';
import {StatusModal} from '../../../components';
import {Overlay} from '../../../common/styles/commonStyles';

const expenseOptions = [
  {label: 'Plumber', value: 'PLUMBER'},
  {label: 'Electrician', value: 'ELECTRICIAN'},
  {label: 'Carpenter', value: 'CARPENTER'},
  {label: 'Municipality', value: 'MUNICIPALITY'},
  {label: 'Other', value: 'OTHER'},
];
type StatusType = 'success' | 'error';

const AddExpenses = ({navigation}: any) => {
  const {isVisible, showModal, dismissModal} = useModal();
  const [selectedExpense, setSelectedExpense] = useState('');
  const [selectedPaymentReceipt, setSelectedPaymentReceipt] = useState<{
    uri: string;
    name: string;
    type: string;
  } | null>(null);
  const [expenseName, setExpenseName] = useState('');
  const [serviceProviderName, setServiceProviderName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
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
  const {day, month, monthName, year} = getMonthYear();

  const isFormValid =
    selectedExpense &&
    serviceProviderName.trim() &&
    contactNumber.trim() &&
    amountPaid.trim() &&
    selectedPaymentReceipt &&
    (selectedExpense !== 'OTHER' || expenseName.trim());

  const [addExpense, {isLoading}] = useAddExpensesMutation();

  const handleGoback = () => {
    navigation.goBack();
  };

  const onImageGalleryClick = useCallback(() => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.8,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled');
          return;
        }

        if (response.errorCode) {
          console.log('Error:', response.errorMessage);
          return;
        }

        const asset = response.assets?.[0];
        if (!asset?.uri) return;

        const extension =
          asset.fileName?.split('.').pop() ||
          asset.type?.split('/').pop() ||
          'jpg';

        const fileName = `Treasurer_${monthName}_${year}.${extension}`;

        const fileObject = {
          uri: asset.uri,
          name: fileName,
          type: asset.type || `image/${extension}`,
        };

        console.log('Generated file object:', fileObject);

        setSelectedPaymentReceipt(fileObject);
      },
    );
  }, [monthName, year]);

  const handleSubmit = async () => {
    try {
      const payload = {
        serviceType: selectedExpense,
        customServiceType: selectedExpense === 'OTHER' ? expenseName : '',
        serviceProviderName,
        contactNumber,
        amountPaid,
        image: selectedPaymentReceipt,
      };
      console.log('Expense payload:', payload);

      const response = await addExpense(payload).unwrap();

      console.log('Expense response:', response);

      setModalConfig({
        type: 'success',
        title: 'Expense Added',
        message: 'Expense for ' + monthName + ' ' + year + ' was added successfully',
      });
      showStatusModal();
    } catch (error: any) {
      console.log('Add Expense Error:', error);
      setModalConfig({
        type: 'error',
        title: 'Failed',
        message:
          error?.data?.message || 'Unable to add expense. Please try again.',
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

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: '#F8F8F8'}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <Header handleBack={handleGoback}>
        <HeaderText>Add Expenses</HeaderText>
      </Header>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 24}}
          keyboardShouldPersistTaps="handled">
          <Title>Record Maintenance Expense</Title>
          <SubTitle>
            Enter the details of service or repair payments made for this month.
          </SubTitle>

          <Container>
            <Label>Expense Type</Label>
            <View style={{marginBottom: 12}}>
              <DropdownField
                data={expenseOptions}
                selectedValue={selectedExpense}
                placeholder="Select Expense"
                onSelect={item => setSelectedExpense(item.value)}
              />
            </View>

            {selectedExpense === 'OTHER' && (
              <>
                <Label>Expense Name</Label>
                <TextInput
                  placeholder="Enter Expense"
                  value={expenseName}
                  onChangeText={setExpenseName}
                  activeOutlineColor="#E9E9E9"
                  style={{marginBottom: 12}}
                />
              </>
            )}

            <Label>Service Provider Name</Label>
            <TextInput
              placeholder="Enter Name"
              value={serviceProviderName}
              onChangeText={setServiceProviderName}
              activeOutlineColor="#E9E9E9"
              style={{marginBottom: 12}}
            />

            <Label>Contact Number</Label>
            <TextInput
              placeholder="Contact Number"
              value={contactNumber}
              onChangeText={setContactNumber}
              activeOutlineColor="#E9E9E9"
              style={{marginBottom: 12}}
              keyboardType="phone-pad"
            />

            <Label>Amount Paid</Label>
            <TextInput
              placeholder="Amount Paid (₹)"
              value={amountPaid}
              onChangeText={setAmountPaid}
              activeOutlineColor="#E9E9E9"
              style={{marginBottom: 12}}
              keyboardType="numeric"
            />
            <Label>Upload Payment Receipt</Label>
            {!selectedPaymentReceipt ? (
              <DottedUploadBox onPress={onImageGalleryClick}>
                <Upload />
                <InfoText>Please upload payment receipt here</InfoText>
              </DottedUploadBox>
            ) : (
              <SuccessBlock>
                <SuccessText>{selectedPaymentReceipt.name}</SuccessText>
                <ActionsContainer>
                  <Eye onPress={showModal} />
                  <Close onPress={() => setSelectedPaymentReceipt(null)} />
                </ActionsContainer>
              </SuccessBlock>
            )}
          </Container>
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

      <MaintenanceBillDetails
        isVisible={isVisible}
        dismissModal={dismissModal}
        uploadedImageUri={selectedPaymentReceipt?.uri}
        uploadedImageName={selectedPaymentReceipt?.name}
      />
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

export default AddExpenses;
