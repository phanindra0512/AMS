import React from 'react';
import {Button, Header, TextInput} from '../../../components';
import {
  Container,
  DottedUploadBox,
  Column,
  InfoText,
  Label,
  RowFields,
  SectionTitle,
  SuccessBlock,
  SuccessText,
  ActionsContainer,
  StyledButton,
  ButtonTitle,
  HeaderText,
} from './styles';
import {Close, Eye, Upload} from '../../../assets/svg';
import TreasurerDetails from './components/TreasurerDetails';

const PayMaintenance = ({navigation}: any) => {
  const handleGoback = () => {
    navigation.goBack();
  };

  return (
    <>
      <Header handleBack={handleGoback}>
        <HeaderText>Pay Maintenance</HeaderText>
      </Header>
      <Container>
        <TreasurerDetails />
        <SectionTitle>Enter basic information</SectionTitle>
        <Label>Transaction Id</Label>
        <TextInput
          placeholder="Enter Transaction Id"
          activeOutlineColor="#E9E9E9"
          disabled={false}
          style={{marginBottom: 12}}
        />
        <Label>Flat Number</Label>
        <TextInput
          value="Flat Number 201"
          disabled={true}
          style={{marginBottom: 12}}
        />

        <Label>Owner Name</Label>
        <TextInput value="Phani" disabled={true} style={{marginBottom: 12}} />

        <RowFields>
          <Column>
            <Label>Date</Label>
            <TextInput
              value="25-Jul-2025"
              disabled={true}
              style={{marginBottom: 12}}
            />
          </Column>
          <Column>
            <Label>Mobile</Label>
            <TextInput
              value="9505876290"
              disabled={true}
              style={{marginBottom: 12}}
            />
          </Column>
        </RowFields>

        <RowFields>
          <Column>
            <Label>Amount</Label>
            <TextInput
              value="1000"
              disabled={true}
              style={{marginBottom: 12}}
            />
          </Column>

          <Column>
            <Label>Payment Type</Label>
            <TextInput value="UPI" disabled={true} style={{marginBottom: 12}} />
          </Column>
        </RowFields>

        <DottedUploadBox>
          <Upload />
          <InfoText>Please upload payment receipt here</InfoText>
        </DottedUploadBox>

        <SuccessBlock>
          <SuccessText> Sample-Image001.jpg</SuccessText>
          <ActionsContainer>
            <Eye />
            <Close />
          </ActionsContainer>
        </SuccessBlock>

        <StyledButton>
          <Button mode="contained">
            <ButtonTitle>SUBMIT</ButtonTitle>
          </Button>
        </StyledButton>

  
      </Container>
    </>
  );
};

export default PayMaintenance;
