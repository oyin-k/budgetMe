import React from 'react';

const Top = ({ budgetItems }) => {
  const { budget, totalIncome, totalExpense, percentage } = budgetItems;

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{' '}
          <span className="budget__title--month">%Month%</span>:
        </div>

        <div className="budget__value">+ {budget}</div>

        <div className="budget__income clearfix">
          <div className="budget__income--text">Income</div>
          <div className="right">
            <div className="budget__income--value">+ {totalIncome}</div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>

        <div className="budget__expenses clearfix">
          <div className="budget__expenses--text">Expenses</div>
          <div className="right clearfix">
            <div className="budget__expenses--value">- {totalExpense}</div>
            <div className="budget__expenses--percentage">{percentage}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
