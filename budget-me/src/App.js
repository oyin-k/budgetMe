import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Top from './components/Top/Top';
import Bottom from './components/Bottom/Bottom';

import './App.css';

const initialValues = {
  budget: 0,
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
    const type = value.type;
    value.id = uuidv4();
    if (type === 'inc') {
      setIncBudget([...incBudget, value]);
    } else {
      setExpBudget([...expBudget, value]);
    }
    console.log({ incomes: incBudget }, { expenses: expBudget });
  };

  const calculateBudget = () => {};

  const calculateTotalIncome = () => {
    let sum = 0;
    let { totalIncome } = budgetState;
    incBudget.forEach((item) => (sum += parseInt(item.amount)));
    totalIncome = sum;
    setBudgetState({ ...budgetState, totalIncome });
    console.log(sum);
  };

  return (
    <div className="App">
      <Top budgetItems={budgetState} />

      <Bottom
        budgetItems={budgetState}
        calculateBudget={calculateBudget}
        calculateTotalIncome={calculateTotalIncome}
        incBudget={incBudget}
        expBudget={expBudget}
        handleTypeUpdate={handleTypeUpdate}
      />
    </div>
  );
};

export default App;
