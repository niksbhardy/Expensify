import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('should setup remove action object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit action object', () => {
  const action = editExpense(
    '123abc', 
    {
      description: 'dummy desc',
      note: 'dummy note'
    }
  );
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'dummy note',
      description: 'dummy desc'
    }
  });
});

test('should setup add action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 1000,
    createdAt: 1000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description : '',
      note : '',
      amount : 0,
      createdAt : 0,
      id: expect.any(String)
    }
  });
});