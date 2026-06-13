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

const expenseOptions = [
  {label: 'Food', value: 'food'},
  {label: 'Travel', value: 'travel'},
  {label: 'Medical', value: 'medical'},
  {label: 'Shopping', value: 'shopping'},
];

const AddExpenses = ({navigation}: any) => {
  const {isVisible, showModal, dismissModal} = useModal();
  const [selectedExpense, setSelectedExpense] = useState('');
  const [selectedPaymentReceipt, setSelectedPaymentReceipt] = useState<{
    uri: string;
    name: string;
    type: string;
  } | null>(null);
  const {day, month, monthName, year} = getMonthYear();

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
                onSelect={item => setSelectedExpense(item.label)}
              />
            </View>

            <Label>Service Provider Name</Label>
            <TextInput
              placeholder="Enter Name"
              activeOutlineColor="#E9E9E9"
              style={{marginBottom: 12}}
            />

            <Label>Contact Number</Label>
            <TextInput
              placeholder="Contact Number"
              activeOutlineColor="#E9E9E9"
              style={{marginBottom: 12}}
              keyboardType="phone-pad"
            />

            <Label>Amount Paid</Label>
            <TextInput
              placeholder="Amount Paid (₹)"
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
        <Button mode="contained" onPress={handleGoback}>
          <ButtonTitle>SUBMIT</ButtonTitle>
        </Button>
      </StyledButton>

      <MaintenanceBillDetails
        isVisible={isVisible}
        dismissModal={dismissModal}
        uploadedImageUri={selectedPaymentReceipt?.uri}
        uploadedImageName={selectedPaymentReceipt?.name}
      />
    </KeyboardAvoidingView>
  );
};

export default AddExpenses;
