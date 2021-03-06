import React from 'react';

import { formatNumber } from '../../helpers/formatNumber';

const Top = ({ budgetItems }) => {
  const { totalIncome, totalExpense } = budgetItems;

  const budget = totalIncome - totalExpense;

  const totalExpensePercentage =
    totalExpense > 0 &&
    totalIncome > totalExpense &&
    Math.round((totalExpense / totalIncome) * 100);

  const displayMonth = () => {
    let now, date, month, months, year;

    now = new Date();
    month = now.getMonth();
    year = now.getFullYear();

    months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    date = months[month] + ' ' + year;

    return date;
  };

  let type;
  budget >= 0 ? (type = 'inc') : (type = 'exp');

  return (
    <section className="section-top">
      <div className="budget">
        <div className="budget__title">
          Available Balance in{' '}
          <span className="budget__title--month">{displayMonth()}</span>:
        </div>

        <div className="budget__value">{formatNumber(budget, type)}</div>
        <div className="budget__item-summary">
          <div className="budget__income">
            <div className="budget__income--text">Income</div>
            <div className="budget__income--value">
              {formatNumber(totalIncome, 'inc')}
            </div>
          </div>
          <div className="budget__expenses">
            <div className="budget__expenses--text">Expenses</div>
            <div className="budget__expenses--value-container">
              <div className="budget__expenses--value">
                {formatNumber(totalExpense, 'exp')}
              </div>
              <div className="budget__expenses--percentage">
                {totalExpensePercentage || 0}%
              </div>
            </div>
          </div>
        </div>
        {/* <div className="budget__income clearfix">
          <div className="budget__income--text">Income</div>
          <div className="right">
            <div className="budget__income--value">
              {formatNumber(totalIncome, 'inc')}
            </div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div> */}

        {/* <div className="budget__expenses clearfix">
          <div className="budget__expenses--text">Expenses</div>
          <div className="right clearfix">
            <div className="budget__expenses--value">
              {formatNumber(totalExpense, 'exp')}
            </div>
            <div className="budget__expenses--percentage">
              {totalExpensePercentage || 0}%
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Top;
