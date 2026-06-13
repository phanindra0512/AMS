import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Header, Calendar, SelectMonth} from '../../../components';
import {
  ButtonTitle,
  ExpenseTotalText,
  HeaderText,
  StyledButton,
} from './styles';
import ExpenseCard from '../../../components/ExpenseCard';
import {GlobalStore} from '../../../storage/stores';
import {getMonthYear} from '../../../utils/useGetMonthYear';
import {useModal} from '../../../utils/useModal';

const ViewExpense = ({navigation}: any) => {
  const {isVisible, showModal, dismissModal} = useModal();
  const [selectedMonth, setSelectedMonth] = useState(getMonthYear().monthName);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const ownerInfo = GlobalStore.ownerInfo.getValue('ownerInfo');
  const userRole = ownerInfo?.role;

  const handleGoback = () => {
    navigation.goBack();
  };

  const handleNavigation = () => {
    navigation.navigate('AddExpenses');
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header handleBack={handleGoback}>
          <HeaderText>View Expenses</HeaderText>
        </Header>

        <Calendar
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          onPress={showModal}
        />

        <ExpenseTotalText>Total Expense Amount : ₹ 1,000 </ExpenseTotalText>

        <ExpenseCard
          title="Plumbing"
          name="Srinivas"
          phone="9505876290"
          amount="1,000"
          date="24th May, 2025"
          paidBy="Raju"
          userRole={userRole}
        />
      </ScrollView>

      {userRole === 'TREASURER' && (
        <StyledButton>
          <Button mode="contained" onPress={handleNavigation}>
            <ButtonTitle>ADD EXPENSE</ButtonTitle>
          </Button>
        </StyledButton>
      )}
      <SelectMonth
        isVisible={isVisible}
        dismissModal={dismissModal}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
    </View>
  );
};

export default ViewExpense;
