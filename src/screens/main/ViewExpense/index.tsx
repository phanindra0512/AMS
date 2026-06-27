import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {
  Button,
  Header,
  Calendar,
  SelectMonth,
  ActivityIndicator,
  MaintenanceBillDetails,
} from '../../../components';
import {
  ButtonTitle,
  ExpenseTotalText,
  HeaderText,
  Label,
  NoItemsContainer,
  StyledButton,
} from './styles';
import ExpenseCard from '../../../components/ExpenseCard';
import {GlobalStore} from '../../../storage/stores';
import {getMonthYear, MONTHS} from '../../../utils/useGetMonthYear';
import {useModal} from '../../../utils/useModal';
import {useGetExpensesByMonthYearQuery} from '../../../api/services/expenses';
import {Overlay} from '../../../common/styles/commonStyles';
const ViewExpense = ({navigation}: any) => {
  const [isTreasurerLoading, setIsTreasurerLoading] = useState(false);
  const {isVisible, showModal, dismissModal} = useModal();
  const [selectedMonth, setSelectedMonth] = useState(getMonthYear().monthName);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [selectedImageName, setSelectedImageName] = useState('');
  const ownerInfo = GlobalStore.ownerInfo.getValue('ownerInfo');
  const userRole = ownerInfo?.role;
  const monthNumber = MONTHS.indexOf(selectedMonth) + 1;
  const {
    isVisible: isExpenseVisible,
    showModal: showExpenseModal,
    dismissModal: dismissExpenseModal,
  } = useModal();

  const {data, isLoading, isFetching, refetch} = useGetExpensesByMonthYearQuery(
    {
      month: monthNumber,
      year: selectedYear,
    },
  );

  console.log('Data from expenses API ===> ', data);
  const {totalExpenseAmount, totalExpenses, data: expenses} = data || {};

  const handleGoback = () => {
    navigation.goBack();
  };

  const handleNavigation = () => {
    navigation.navigate('AddExpenses');
  };
  return (
    <>
      <View style={{flex: 1}}>
        <Header handleBack={handleGoback}>
          <HeaderText>View Expenses</HeaderText>
        </Header>
        <Calendar
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          onPress={showModal}
          onLoadingChange={setIsTreasurerLoading}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ExpenseTotalText>
            Total Expense Amount : ₹{' '}
            {isLoading || isFetching
              ? '...'
              : totalExpenseAmount?.toLocaleString('en-IN')}
          </ExpenseTotalText>

          {isLoading || isFetching ? null : expenses?.length === 0 ? (
            <NoItemsContainer>
              <Label>No Expenses Found</Label>
            </NoItemsContainer>
          ) : (
            expenses?.map(expense => (
              <ExpenseCard
                key={expense._id}
                data={expense}
                userRole={userRole}
                onView={() => {
                  setSelectedImageUrl(expense.imageUrl || '');
                  setSelectedImageName(`${expense.serviceType}_${expense._id}`);
                  showExpenseModal();
                }}
              />
            ))
          )}
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
        <MaintenanceBillDetails
          isVisible={isExpenseVisible}
          dismissModal={dismissExpenseModal}
          uploadedImageUri={selectedImageUrl}
          uploadedImageName={selectedImageName}
        />
      </View>
      {(isLoading || isFetching || isTreasurerLoading) && (
        <Overlay>
          <ActivityIndicator />
        </Overlay>
      )}
    </>
  );
};

export default ViewExpense;
