import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header} from '../../../components';
import {
  CardContainer,
  HeaderText,
  Heading,
  HeadingContainer,
  Description,
  Container,
  FooterContainer,
  HelperText,
  HelperBoldText,
} from './styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Announcement = ({navigation}: any) => {
  const handleGoback = () => {
    navigation.goBack();
  };

  const description =
    'Monthly Committee Meeting\n\n📅 25 June 2026\n🕒 3:00 PM\n👤 Raju Kumar\n\n────────────────────\n\nDear Residents,\n\nThe monthly association meeting\nwill be held today at 3 PM in\nthe Community Hall.\n\nPlease attend.\n\n────────────────────';

  const description_2 =
    'నెలవారీ అపార్ట్‌మెంట్ సమావేశం\n\n📅 25 జూన్ 2026\n🕒 మధ్యాహ్నం 3:00 గంటలకు\n👤 రాజు కుమార్\n\nప్రియమైన నివాసితులకు,\n\nఈ రోజు మధ్యాహ్నం 3 గంటలకు కమ్యూనిటీ హాల్‌లో సమావేశం నిర్వహించబడుతుంది.\n\nదయచేసి అందరూ హాజరు కావాలి.📢 సమావేశం\n\nనెలవారీ అపార్ట్‌మెంట్ సమావేశం\n\n📅 25 జూన్ 2026\n🕒 మధ్యాహ్నం 3:00 గంటలకు\n👤 రాజు కుమార్\n\nప్రియమైన నివాసితులకు,\n\nఈ రోజు మధ్యాహ్నం 3 గంటలకు కమ్యూనిటీ హాల్‌లో సమావేశం నిర్వహించబడుతుంది.\n\nదయచేసి అందరూ హాజరు కావాలి.';
  return (
    <View style={styles.container}>
      <Header handleBack={handleGoback}>
        <HeaderText>Announcements</HeaderText>
      </Header>
      <ScrollView>
        <Container>
          <CardContainer>
            <HeadingContainer>
              <Heading>📢 Water Supply</Heading>
              <SimpleLineIcons name="options-vertical" size={18} />
            </HeadingContainer>
            <Description>{description}</Description>
            <FooterContainer>
              <HelperText>
                Created By : <HelperBoldText>Phanindra</HelperBoldText>
              </HelperText>
              <HelperText>
                Date : <HelperBoldText>24th April 2026</HelperBoldText>
              </HelperText>
            </FooterContainer>
          </CardContainer>

          <CardContainer>
            <HeadingContainer>
              <Heading>📢 Water Supply</Heading>
              <SimpleLineIcons name="options-vertical" size={18} />
            </HeadingContainer>
            <Description>{description_2}</Description>
          </CardContainer>
        </Container>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: '#333',
    fontFamily: 'JosefinSans-SemiBold',
  },
});

export default Announcement;
