import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Top from './components/Top/Top';
import Bottom from './components/Bottom/Bottom';

import './App.css';

const initialValues = {
  totalIncome: 0,
  totalExpense: 0,
  type: 'inc',
  description: '',
  amount: null,
  percentage: null,
};

const App = () => {
  const [budgetState, setBudgetState] = useState(initialValues);
  const [incBudget, setIncBudget] = useState([]);
  const [expBudget, setExpBudget] = useState([]);

  const handleTypeUpdate = (value) => {
    const { type, amount } = value;
    let { totalIncome, totalExpense } = budgetState;
    value.id = uuidv4();
    if (type === 'inc') {
      setIncBudget([...incBudget, value]);
      setBudgetState({
        ...budgetState,
        totalIncome: totalIncome + parseInt(amount),
      }); //update the totalIncome here
    } else {
      setExpBudget([...expBudget, value]);
      setBudgetState({
        ...budgetState,
        totalExpense: totalExpense + parseInt(amount),
      }); //update the totalExpense here
    }
  };

  return (
    <div className="App">
      <Top budgetItems={budgetState} />

      <Bottom
        budgetItems={budgetState}
        incBudget={incBudget}
        expBudget={expBudget}
        handleTypeUpdate={handleTypeUpdate}
      />
    </div>
  );
};

export default App;
