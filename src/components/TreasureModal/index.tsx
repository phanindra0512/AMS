import * as React from 'react';
import Modal from '../Modal';
import {
  ModalTitle,
  ModalContainer,
  ModalDescription,
  StyledButton,
  ButtonTitle,
  AmountText,
  SummaryRow,
  SummaryCard,
  SummaryLabel,
  SummaryValue,
} from './styles';
import {Image} from 'react-native';
import {Button} from '../Button';
import {TreasurerAmountResponse} from '../../types/payment';

interface TreasureModalProps {
  visible: boolean;
  onClose: () => void;
  treasurerData?: TreasurerAmountResponse;
}

const TreasureModal = ({
  visible,
  onClose,
  treasurerData,
}: TreasureModalProps) => {
  const {
    totalCollection = 0,
    totalExpenses = 0,
    treasurerAmount = 0,
  } = treasurerData ?? {};
  return (
    <Modal
      isVisible={visible}
      style={{
        justifyContent: 'center',
        marginHorizontal: 30,
      }}>
      <ModalContainer>
        <Image
          source={require('../../assets/images/treasureBag.png')}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
            marginVertical: 12,
          }}
          resizeMode="contain"
        />
        <ModalTitle>Treasury Amount</ModalTitle>
        <ModalDescription>
          Available balance in apartment treasury
        </ModalDescription>
        <AmountText>₹ {treasurerAmount?.toLocaleString()}</AmountText>

        <SummaryRow>
          <SummaryCard variant="success">
            <SummaryLabel>Total Collection</SummaryLabel>
            <SummaryValue variant="success">
              ₹ {totalCollection?.toLocaleString()}
            </SummaryValue>
            <SummaryLabel>Till Now</SummaryLabel>
          </SummaryCard>

          <SummaryCard variant="danger">
            <SummaryLabel>Total Expenses</SummaryLabel>
            <SummaryValue variant="danger">
              ₹ {totalExpenses?.toLocaleString()}
            </SummaryValue>
            <SummaryLabel>Till Now</SummaryLabel>
          </SummaryCard>
        </SummaryRow>

        <StyledButton>
          <Button
            mode="contained"
            onPress={onClose}
            style={{borderRadius: 100}}>
            <ButtonTitle>Okay</ButtonTitle>
          </Button>
        </StyledButton>
      </ModalContainer>
    </Modal>
  );
};

export default TreasureModal;
