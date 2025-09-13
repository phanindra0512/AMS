import * as React from 'react';
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

const AddService = ({navigation}: any) => {
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
          contentContainerStyle={{paddingBottom: 24}}
          keyboardShouldPersistTaps="handled">
          <Title>Service Provider Details</Title>
          <SubTitle>
            Fill in the contact and service details to make them available in
            the Service Hub.
          </SubTitle>

          <Label>Service Type</Label>
          <TextInput
            placeholder="Service Type (Ex: Plumber)"
            activeOutlineColor="#E9E9E9"
            style={{marginHorizontal: 24, marginBottom: 12}}
          />

          <Label>Name</Label>
          <TextInput
            placeholder="Service Provider Name"
            activeOutlineColor="#E9E9E9"
            style={{marginHorizontal: 24, marginBottom: 12}}
          />

          <Label>Mobile Number</Label>
          <TextInput
            placeholder="Mobile Number"
            activeOutlineColor="#E9E9E9"
            style={{marginHorizontal: 24, marginBottom: 12}}
            keyboardType="phone-pad"
          />

          <Label>Area</Label>
          <TextInput
            placeholder="Area"
            activeOutlineColor="#E9E9E9"
            style={{marginHorizontal: 24, marginBottom: 12}}
            keyboardType="numeric"
          />

          <Label>Location</Label>
          <TextInput
            placeholder="Location"
            activeOutlineColor="#E9E9E9"
            style={{marginHorizontal: 24, marginBottom: 12}}
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

export default AddService;
