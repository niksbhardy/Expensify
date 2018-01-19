import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

export const ExpenseDashboard = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
    
  </div>
);

export default ExpenseDashboard;