import React, {useCallback, useState} from 'react';
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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {getMonthYear} from '../../../utils/useGetMonthYear';
import {useGetTreasurerDetailsQuery} from '../../../api/services/treasurer';
import {GlobalStore} from '../../../storage/stores';
import {MAINTENANCE_AMOUNT, PAYMENT_TYPE} from '../../../constants/maintenance';
import MaintenanceBillDetails from './components/MaintenanceBillDetails';
import {useModal} from '../../../utils/useModal';
import {usePayMaintenanceMutation} from '../../../api/services/maintenance';
import {Overlay} from '../../../common/styles/commonStyles';
import ActivityIndicator from '../../../components/ActivityIndicator';

const PayMaintenance = ({navigation}: any) => {
  const [transactionId, setTransactionId] = useState('');
  const [selectedPaymentReceipt, setSelectedPaymentReceipt] = useState<{
    uri: string;
    name: string;
    type: string;
  } | null>(null);
  const {isVisible, showModal, dismissModal} = useModal();
  const {day, month, monthName, year} = getMonthYear();
  const OwnerDetails = GlobalStore.ownerInfo.getValue('ownerInfo');
  const {flatNumber, name, phoneNumber} = OwnerDetails || {};
  const {data, isLoading, error} = useGetTreasurerDetailsQuery({
    month,
    year,
  });
  const [payMaintenance, {isLoading: isLoadingPayment}] =
    usePayMaintenanceMutation();

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

        const fileName = `${flatNumber}_maintenance_bill_${monthName}_${year}.${extension}`;

        const fileObject = {
          uri: asset.uri,
          name: fileName,
          type: asset.type || `image/${extension}`,
        };

        console.log('Generated file object:', fileObject);

        setSelectedPaymentReceipt(fileObject);
      },
    );
  }, [flatNumber, monthName, year]);

  const handleSubmit = async () => {
    try {
      const response = await payMaintenance({
        transactionId,
        month,
        year,
        flatNumber,
        ownerName: name,
        ownerMobile: phoneNumber,
        amount: MAINTENANCE_AMOUNT,
        paymentType: PAYMENT_TYPE,
        receipt: selectedPaymentReceipt,
      }).unwrap();
      console.log('Payment Success:', response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header handleBack={handleGoback}>
        <HeaderText>Pay Maintenance</HeaderText>
      </Header>
      <Container>
        <TreasurerDetails
          data={data?.data}
          month={monthName}
          year={year}
          isLoading={isLoading}
        />
        <SectionTitle>Enter basic information</SectionTitle>
        <Label>Transaction Id</Label>
        <TextInput
          placeholder="Enter Transaction Id"
          activeOutlineColor="#E9E9E9"
          disabled={false}
          maxLength={12}
          keyboardType="number-pad"
          style={{marginBottom: 12}}
          onChangeText={val => setTransactionId(val)}
        />
        <Label>Flat Number</Label>
        <TextInput
          value={`Flat Number ${flatNumber}`}
          disabled={true}
          style={{marginBottom: 12}}
        />

        <Label>Owner Name</Label>
        <TextInput value={name} disabled={true} style={{marginBottom: 12}} />

        <RowFields>
          <Column>
            <Label>Date</Label>
            <TextInput
              value={`${day}-${monthName}-${year}`}
              disabled={true}
              style={{marginBottom: 12}}
            />
          </Column>
          <Column>
            <Label>Mobile</Label>
            <TextInput
              value={phoneNumber}
              disabled={true}
              style={{marginBottom: 12}}
            />
          </Column>
        </RowFields>

        <RowFields>
          <Column>
            <Label>Amount</Label>
            <TextInput
              value={MAINTENANCE_AMOUNT.toString()}
              disabled={true}
              style={{marginBottom: 12}}
            />
          </Column>

          <Column>
            <Label>Payment Type</Label>
            <TextInput
              value={PAYMENT_TYPE}
              disabled={true}
              style={{marginBottom: 12}}
            />
          </Column>
        </RowFields>

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

        <StyledButton>
          <Button
            mode="contained"
            disabled={
              isLoading || !selectedPaymentReceipt || transactionId.length === 0
            }
            onPress={handleSubmit}>
            <ButtonTitle>SUBMIT</ButtonTitle>
          </Button>
        </StyledButton>

        <MaintenanceBillDetails
          isVisible={isVisible}
          dismissModal={dismissModal}
          uploadedImageUri={selectedPaymentReceipt?.uri}
          uploadedImageName={selectedPaymentReceipt?.name}
        />
      </Container>
      {isLoadingPayment && (
        <Overlay>
          <ActivityIndicator />
        </Overlay>
      )}
    </>
  );
};

export default PayMaintenance;
