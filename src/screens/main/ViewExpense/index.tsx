import React from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Header} from '../../../components';
import {
  ButtonTitle,
  CalendarContainer,
  CalendarText,
  ExpenseTotalText,
  HeaderText,
  StyledButton,
  TreasurerText,
} from './styles';
import {Calendar, Dropdown} from '../../../assets/svg';
import ExpenseCard from '../../../components/ExpenseCard';
import {GlobalStore} from '../../../storage/stores';

const ViewExpense = ({navigation}: any) => {
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

        <CalendarContainer>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Calendar />
            <View>
              <CalendarText>Collection of month - Jun</CalendarText>
              <TreasurerText>Treasurer : Raju, 201</TreasurerText>
            </View>
          </View>
          <Dropdown />
        </CalendarContainer>

        <ExpenseTotalText>Total Expense Amount : ₹ 1,000 </ExpenseTotalText>

        <ExpenseCard
          title="Plumbing"
          name="Srinivas"
          phone="9505876290"
          amount="1,000"
          date="24th May, 2025"
          paidBy="Raju"
        />
      </ScrollView>

      {userRole === 'TREASURER' && (
        <StyledButton>
          <Button mode="contained" onPress={handleNavigation}>
            <ButtonTitle>ADD EXPENSE</ButtonTitle>
          </Button>
        </StyledButton>
      )}
    </View>
  );
};

export default ViewExpense;
