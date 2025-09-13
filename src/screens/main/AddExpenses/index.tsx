import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Button, Header, TextInput} from '../../../components';
import {
  ButtonTitle,
  HeaderText,
  Label,
  StyledButton,
  SubTitle,
  Title,
} from './styles';

const AddExpenses = ({navigation}: any) => {
  const handleGoback = () => {
    navigation.goBack();
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

          <Label>Type</Label>
          <TextInput
            placeholder="Expense Type"
            activeOutlineColor="#E9E9E9"
            style={{marginHorizontal: 20, marginBottom: 12}}
          />

          <Label>Name</Label>
          <TextInput
            placeholder="Service Provider Name"
            activeOutlineColor="#E9E9E9"
            style={{marginHorizontal: 20, marginBottom: 12}}
          />

          <Label>Contact Number</Label>
          <TextInput
            placeholder="Contact Number"
            activeOutlineColor="#E9E9E9"
            style={{marginHorizontal: 20, marginBottom: 12}}
            keyboardType="phone-pad"
          />

          <Label>Amount Paid</Label>
          <TextInput
            placeholder="Amount Paid (₹)"
            activeOutlineColor="#E9E9E9"
            style={{marginHorizontal: 20, marginBottom: 12}}
            keyboardType="numeric"
          />

          <Label>Payment Date</Label>
          <TextInput
            placeholder="Payment Date"
            activeOutlineColor="#E9E9E9"
            style={{marginHorizontal: 20, marginBottom: 12}}
          />

          <Label>Payment Link</Label>
          <TextInput
            placeholder="Payment Receipt Link"
            activeOutlineColor="#E9E9E9"
            style={{marginHorizontal: 20, marginBottom: 12}}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
      <StyledButton>
        <Button mode="contained" onPress={handleGoback}>
          <ButtonTitle>SUBMIT</ButtonTitle>
        </Button>
      </StyledButton>
    </KeyboardAvoidingView>
  );
};

export default AddExpenses;
