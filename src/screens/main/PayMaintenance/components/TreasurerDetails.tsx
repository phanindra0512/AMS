import * as React from 'react';
import {
  CenterContainer,
  CopyHint,
  InfoDetailsText,
  InfoRow,
  SectionCard,
  SectionTitle,
} from '../styles';
import {
  CopyIcon,
  Phone,
  ProfileFill,
  UPIPay,
} from '../../../../assets/svg';
import {Treasurer} from '../../../../types/treasurer';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {useState} from 'react';

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
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyUPIWithFeedback = () => {
    if (!data?.upiID) return;

    Clipboard.setString(data.upiID);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
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
            <TouchableOpacity
              onPress={handleCopyUPIWithFeedback}
              activeOpacity={0.7}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 6,
                borderRadius: 6,
                backgroundColor: isCopied ? '#e6f4ea' : 'transparent',
              }}>
              <InfoDetailsText style={{marginRight: 8}}>{data?.upiID}</InfoDetailsText>
              <CopyIcon />
            </TouchableOpacity>
          </InfoRow>
          <CopyHint style={{color: isCopied ? '#10a957' : '#bdbdbd'}}>
            {isCopied ? 'Copied to clipboard' : 'Tap to copy UPI ID'}
          </CopyHint>
        </>
      )}
    </SectionCard>
  );
};

export default TreasurerDetails;
