import * as React from 'react';
import Modal from '../../../../components/Modal';
import {
  ModalTitle,
  ModalContainer,
  Grid,
  MonthButton,
  MonthText,
} from '../styles';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const SelectMonth = ({
  isVisible,
  dismissModal,
  selectedMonth,
  setSelectedMonth,
}: any) => {
  const handleSelectMonth = (month: string) => {
    setSelectedMonth(month);
    dismissModal();
  };
  return (
    <Modal isVisible={isVisible} style={{justifyContent: 'flex-start'}}>
      <ModalContainer>
        <ModalTitle>Select Month</ModalTitle>
        <Grid>
          {months.map(month => (
            <MonthButton
              key={month}
              selected={selectedMonth === month}
              onPress={() => handleSelectMonth(month)}>
              <MonthText selected={selectedMonth === month}>{month}</MonthText>
            </MonthButton>
          ))}
        </Grid>
      </ModalContainer>
    </Modal>
  );
};

export default SelectMonth;
