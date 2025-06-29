import React, {useState} from 'react';
import {View} from 'react-native';
import {Header} from '../../../components';
import {CalendarContainer, CalendarText, HeaderText} from './styles';
import {Calendar, Dropdown} from '../../../assets/svg';
import CollectionStatus from './components/CollectionStatus';
import Transactions from './components/Transaction';
import SelectMonth from './components/SelectMonth';
import {useModal} from '../../../utils/useModal';

const ViewCollection = ({navigation}: any) => {
  const {isVisible, showModal, dismissModal} = useModal();
  const [selectedMonth, setSelectedMonth] = useState('Jun');

  const handleGoback = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Header handleBack={handleGoback}>
        <HeaderText>View Collection</HeaderText>
      </Header>

      <CalendarContainer onPress={showModal}>
        <View style={{flexDirection: 'row'}}>
          <Calendar />
          <CalendarText>Collection of month - {selectedMonth}</CalendarText>
        </View>
        <Dropdown />
      </CalendarContainer>

      <CollectionStatus />
      <Transactions />
      <SelectMonth
        isVisible={isVisible}
        dismissModal={dismissModal}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
    </View>
  );
};
export default ViewCollection;
