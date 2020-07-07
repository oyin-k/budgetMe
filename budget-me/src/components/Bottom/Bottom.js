import React from 'react';

import AccountForm from '../AccountForm/AccountForm';
import AccountItem from '../AccountItem/AccountItem';

import { formatNumber } from '../../helpers/formatNumber';

const Bottom = ({
  budgetItems,
  incBudget,
  expBudget,
  handleTypeUpdate,
  handleIncomeDelete,
  handleExpenseDelete,
}) => {
  const { type, description, amount, totalIncome } = budgetItems;

  return (
    <div className="bottom">
      <AccountForm
        type={type}
        description={description}
        amount={amount}
        handleTypeUpdate={handleTypeUpdate}
      />
      <div className="container clearfix">
        <div className="income">
          <h2 className="icome__title">Income</h2>

          <div className="income__list">
            {incBudget.map((info) => (
              <AccountItem
                key={info.id}
                id={info.id}
                description={info.description}
                amount={formatNumber(info.amount)}
                deleteItem={handleIncomeDelete}
              />
            ))}
          </div>
        </div>

        <div className="expenses">
          <h2 className="expenses__title">Expenses</h2>

          <div className="expenses__list">
            {expBudget.map((info) => {
              // calculate individual percentage exp
              const expPercent =
                info.amount < totalIncome &&
                Math.round((info.amount / totalIncome) * 100);
              return (
                <AccountItem
                  key={info.id}
                  id={info.id}
                  description={info.description}
                  amount={formatNumber(info.amount)}
                  deleteItem={handleExpenseDelete}
                >
                  <div className="item__percentage"> {expPercent}% </div>
                </AccountItem>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
