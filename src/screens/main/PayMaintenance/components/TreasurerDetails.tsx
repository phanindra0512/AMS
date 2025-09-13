import * as React from 'react';
import {InfoDetailsText, InfoRow, SectionCard, SectionTitle} from '../styles';
import {CopyIcon, Phone, ProfileFill, UPIPay} from '../../../../assets/svg';

const TreasurerDetails = () => {
  return (
    <SectionCard>
      <SectionTitle>Treasurer of month - June</SectionTitle>
      <InfoRow>
        <ProfileFill />
        <InfoDetailsText>Raju, 201</InfoDetailsText>
      </InfoRow>
      <InfoRow>
        <Phone />
        <InfoDetailsText>9505876290</InfoDetailsText>
      </InfoRow>
      <InfoRow>
        <UPIPay />
        <InfoDetailsText>9505876290@ybl</InfoDetailsText>
        <CopyIcon />
      </InfoRow>
    </SectionCard>
  );
};

export default TreasurerDetails;
