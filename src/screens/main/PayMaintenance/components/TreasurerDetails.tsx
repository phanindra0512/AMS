import * as React from 'react';
import {
  CenterContainer,
  InfoDetailsText,
  InfoRow,
  SectionCard,
  SectionTitle,
} from '../styles';
import {CopyIcon, Phone, ProfileFill, UPIPay} from '../../../../assets/svg';
import {Treasurer} from '../../../../types/treasurer';
import {ActivityIndicator} from 'react-native';

interface TreasurerDetailsProps {
  data?: Treasurer;
  month?: string | number;
  year?: string | number;
  isLoading?: boolean;
}

const TreasurerDetails: React.FC<TreasurerDetailsProps> = ({
  data,
  month,
  year,
  isLoading,
}) => {
  return (
    <SectionCard>
      <SectionTitle>
        Treasurer of month - {month} {year}
      </SectionTitle>
      {isLoading ? (
        <CenterContainer>
          <ActivityIndicator size="small" color={'#636B2F'} />
        </CenterContainer>
      ) : (
        <>
          <InfoRow>
            <ProfileFill />
            <InfoDetailsText>
              {data?.name}, {data?.flatNumber}
            </InfoDetailsText>
          </InfoRow>
          <InfoRow>
            <Phone />
            <InfoDetailsText>{data?.phoneNumber}</InfoDetailsText>
          </InfoRow>
          <InfoRow>
            <UPIPay />
            <InfoDetailsText>{data?.upiID}</InfoDetailsText>
            <CopyIcon />
          </InfoRow>
        </>
      )}
    </SectionCard>
  );
};

export default TreasurerDetails;
