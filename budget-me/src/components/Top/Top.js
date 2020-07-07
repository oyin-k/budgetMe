import React from 'react';

import { formatNumber } from '../../helpers/formatNumber';

const Top = ({ budgetItems }) => {
  const { totalIncome, totalExpense } = budgetItems;

  const budget = totalIncome - totalExpense; //removing budget since it is not so important, you can just subtract income and expense

  const totalExpensePercentage =
    totalExpense > 0 &&
    totalIncome > totalExpense &&
    Math.round((totalExpense / totalIncome) * 100);

  let type;
  budget > 0 ? (type = 'inc') : (type = 'exp');

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{' '}
          <span className="budget__title--month">%Month%</span>:
        </div>

        <div className="budget__value">{formatNumber(budget, type)}</div>
        <div className="budget__income clearfix">
          <div className="budget__income--text">Income</div>
          <div className="right">
            <div className="budget__income--value">
              {formatNumber(totalIncome, 'inc')}
            </div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>

        <div className="budget__expenses clearfix">
          <div className="budget__expenses--text">Expenses</div>
          <div className="right clearfix">
            <div className="budget__expenses--value">
              {formatNumber(totalExpense, 'exp')}
            </div>
            <div className="budget__expenses--percentage">
              {totalExpensePercentage || 0}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
