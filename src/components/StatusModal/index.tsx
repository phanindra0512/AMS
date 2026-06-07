import * as React from 'react';
import Modal from '../Modal';
import {
  ModalTitle,
  ModalContainer,
  ModalDescription,
  StyledButton,
  ButtonTitle,
} from './styles';
import {Image} from 'react-native';
import {Button} from '../Button';

type StatusType = 'success' | 'error';

interface StatusModalProps {
  visible: boolean;
  type: StatusType;
  title?: string;
  message?: string;
  onClose: () => void;
}

const STATUS_CONFIG = {
  success: {
    image: require('../../assets/images/success.png'),
    defaultTitle: 'Payment Success!',
    defaultMessage: 'Your payment has been processed successfully.',
  },
  error: {
    image: require('../../assets/images/error.png'),
    defaultTitle: 'Payment Failed!',
    defaultMessage: 'Something went wrong. Please try again.',
  },
};

const StatusModal = ({
  visible,
  type,
  title,
  message,
  onClose,
}: StatusModalProps) => {
  const config = STATUS_CONFIG[type];
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      style={{justifyContent: 'center', marginHorizontal: 20}}>
      <ModalContainer>
        <Image
          source={config.image}
          style={{
            width: 50,
            height: 50,
            alignSelf: 'center',
            marginVertical: 20,
          }}
          resizeMode="contain"
        />
        <ModalTitle>{title || config.defaultTitle}</ModalTitle>
        <ModalDescription>{message || config.defaultMessage}</ModalDescription>
        <StyledButton>
          <Button
            mode="contained"
            onPress={onClose}
            style={{borderRadius: 100}}>
            <ButtonTitle>Close</ButtonTitle>
          </Button>
        </StyledButton> 

      </ModalContainer>
    </Modal>
  );
};

export default StatusModal;
