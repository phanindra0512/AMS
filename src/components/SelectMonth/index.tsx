import * as React from 'react';
import {useState} from 'react';
import Modal from '../Modal';
import {
  ModalTitle,
  ModalContainer,
  Grid,
  MonthButton,
  MonthText,
  YearContainer,
  StyledButton,
  ButtonTitle,
} from './styles';
import {Button} from '../Button';

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

const getYears = () => {
  const currentYear = new Date().getFullYear();
  return [currentYear - 1, currentYear];
};

const SelectMonth = ({
  isVisible,
  dismissModal,
  selectedMonth,
  setSelectedMonth,
  selectedYear,
  setSelectedYear,
}: any) => {
  const [tempMonth, setTempMonth] = useState(selectedMonth);
  const [tempYear, setTempYear] = useState(selectedYear);
  const years = getYears();
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const isMonthDisabled = (monthIndex: number) => {
    // If selected year is current year, disable future months
    if (tempYear === currentYear) {
      return monthIndex > currentMonth;
    }
    return false;
  };

  const handleSelectMonth = (month: string, monthIndex: number) => {
    // Don't allow selection of future months in current year
    if (!isMonthDisabled(monthIndex)) {
      setTempMonth(month);
    }
  };

  const handleSelectYear = (year: number) => {
    setTempYear(year);
    
    // If switching to current year, validate the selected month
    if (year === currentYear) {
      const tempMonthIndex = months.indexOf(tempMonth);
      // If selected month is in the future, reset to current month
      if (tempMonthIndex > currentMonth) {
        setTempMonth(months[currentMonth]);
      }
    }
  };

  const handleConfirm = () => {
    // Validate that month+year combination is valid
    const tempMonthIndex = months.indexOf(tempMonth);
    if (tempYear === currentYear && tempMonthIndex > currentMonth) {
      // This shouldn't happen, but just in case
      return;
    }
    setSelectedMonth(tempMonth);
    setSelectedYear(tempYear);
    dismissModal();
  };

  return (
    <Modal isVisible={isVisible} style={{justifyContent: 'flex-start'}}>
      <ModalContainer>
        <ModalTitle>Select Month</ModalTitle>
        <Grid>
          {months.map((month, index) => (
            <MonthButton
              key={month}
              selected={tempMonth === month}
              disabled={isMonthDisabled(index)}
              onPress={() => handleSelectMonth(month, index)}>
              <MonthText selected={tempMonth === month} disabled={isMonthDisabled(index)}>
                {month}
              </MonthText>
            </MonthButton>
          ))}
        </Grid>

        <ModalTitle>Select Year</ModalTitle>
        <YearContainer>
          {years.map(year => (
            <MonthButton
              key={year}
              selected={tempYear === year}
              onPress={() => handleSelectYear(year)}>
              <MonthText selected={tempYear === year}>{year}</MonthText>
            </MonthButton>
          ))}
        </YearContainer>

        <StyledButton>
          <Button mode="contained" onPress={handleConfirm}>
            <ButtonTitle>CONFIRM</ButtonTitle>
          </Button>
        </StyledButton>
      </ModalContainer>
    </Modal>
  );
};

export default SelectMonth;
