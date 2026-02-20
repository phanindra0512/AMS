import * as React from 'react';
import {Dimensions} from 'react-native';
import Modal from '../../../../components/Modal';
import {BillImage, BillTitle, CloseText, ImageContainer} from '../styles';

interface MaintenanceBillDetailsProps {
  isVisible: boolean;
  dismissModal: () => void;
  uploadedImageUri?: string;
  uploadedImageName?: string;
}
const MaintenanceBillDetails = ({
  isVisible,
  dismissModal,
  uploadedImageUri,
  uploadedImageName,
}: MaintenanceBillDetailsProps) => {
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

  const imageWidth = Math.min(screenWidth * 0.92, screenHeight * 0.6);
  const imageHeight = Math.min(screenHeight * 0.5, imageWidth * 0.75);

  return (
    <Modal isVisible={isVisible} onBackdropPress={dismissModal}>
      <ImageContainer>
        <CloseText onPress={dismissModal}>Close</CloseText>

        <BillImage
          source={{
            uri: uploadedImageUri,
          }}
          style={{width: imageWidth, height: imageHeight}}
          resizeMode="contain"
        />
        <BillTitle>{uploadedImageName}</BillTitle>
      </ImageContainer>
    </Modal>
  );
};

export default MaintenanceBillDetails;
