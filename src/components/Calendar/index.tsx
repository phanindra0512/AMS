import React from 'react';
import {View} from 'react-native';
import {Calendar, Dropdown} from '../../assets/svg';
import {CalendarContainer, CalendarText, TreasurerText} from './styles';
import {MONTHS} from '../../utils/useGetMonthYear';
import {useGetTreasurerDetailsQuery} from '../../api/services/treasurer';

interface CalendarProps {
  selectedMonth: string;
  selectedYear: number;
  onPress: () => void;
}

const CalendarComponent = ({
  selectedMonth,
  selectedYear,
  onPress,
}: CalendarProps) => {
  const monthNumber = MONTHS.indexOf(selectedMonth) + 1;
  const {data, isLoading, isError, error} = useGetTreasurerDetailsQuery({
    month: monthNumber,
    year: selectedYear,
  });

  const treasurerDetails = data?.data;
  let treasurerText = 'Loading Treasurer details...';

  if (isError) {
    treasurerText = 'Error loading treasurer details';
  } else if (!isLoading && treasurerDetails) {
    treasurerText = `${treasurerDetails.name}, ${treasurerDetails.flatNumber}`;
  } else if (!isLoading && !treasurerDetails) {
    treasurerText = 'No treasurer data';
  } 

  return (
    <CalendarContainer onPress={onPress}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Calendar />
        <View>
          <CalendarText>
            Collection of month - {selectedMonth} {selectedYear}
          </CalendarText>
          <TreasurerText>
            Treasurer : {treasurerText}
          </TreasurerText>
        </View>
      </View>
      <Dropdown />
    </CalendarContainer>
  );
};

export default CalendarComponent;
