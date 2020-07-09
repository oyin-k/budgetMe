import React from 'react';

import AccountForm from '../AccountForm/AccountForm';
import AccountItem from '../AccountItem/AccountItem';

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
    <section className="section-bottom">
      <AccountForm
        type={type}
        description={description}
        amount={amount}
        handleTypeUpdate={handleTypeUpdate}
      />
      <div className="container clearfix">
        <div className="income">
          <h2 className="income__title">Income</h2>

          <div className="income__list">
            {incBudget.map((info) => {
              return (
                <AccountItem
                  key={info.id}
                  id={info.id}
                  type={info.type}
                  description={info.description}
                  amount={info.amount}
                  deleteItem={handleIncomeDelete}
                />
              );
            })}
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
                  type={info.type}
                  description={info.description}
                  amount={info.amount}
                  deleteItem={handleExpenseDelete}
                >
                  <div className="item__percentage"> {expPercent}% </div>
                </AccountItem>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
