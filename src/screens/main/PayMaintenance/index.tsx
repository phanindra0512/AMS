import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Header} from '../../../components';
import {
  Container,
  DottedUploadBox,
  FieldView,
  HalfField,
  InfoIcon,
  InfoRow,
  Column,
  InfoText,
  Label,
  RowFields,
  SectionCard,
  SectionTitle,
  SuccessBlock,
  SuccessText,
  ActionsContainer,
  StyledButton,
  ButtonTitle,
  HeaderText,
} from './styles';
import {
  Close,
  Eye,
  Phone,
  ProfileFill,
  UPIPay,
  Upload,
} from '../../../assets/svg';

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
        <SectionCard>
          <SectionTitle>Treasurer of month - June</SectionTitle>
          <InfoRow>
            <ProfileFill />
            <InfoText>Raju, 201</InfoText>
          </InfoRow>
          <InfoRow>
            <Phone />
            <InfoText>9505876290</InfoText>
          </InfoRow>
          <InfoRow>
            <UPIPay />
            <InfoText>9505876290@ybl</InfoText>
          </InfoRow>
        </SectionCard>

        <SectionTitle>Enter basic information</SectionTitle>

        <Label>Flat Number</Label>
        <FieldView>
          <InfoText>Flat Number 201</InfoText>
        </FieldView>

        <Label>Owner Name</Label>
        <FieldView>
          <InfoText>Phani</InfoText>
        </FieldView>

        <RowFields>
          <Column>
            <Label>Date</Label>
            <HalfField>
              <InfoText>25-Jul-2025</InfoText>
            </HalfField>
          </Column>
          <Column>
            <Label>Mobile</Label>
            <HalfField>
              <InfoText>9505876290</InfoText>
            </HalfField>
          </Column>
        </RowFields>

        <RowFields>
          <Column>
            <Label>Amount</Label>
            <HalfField>
              <InfoText>1000</InfoText>
            </HalfField>
          </Column>

          <Column>
            <Label>Payment Type</Label>
            <HalfField>
              <InfoText>UPI</InfoText>
            </HalfField>
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
