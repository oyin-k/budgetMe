import React, { useState } from 'react';

import AccountForm from '../AccountForm/AccountForm';
import AccountItem from '../AccountItem/AccountItem';

const Bottom = ({ budgetItems, incBudget, expBudget, handleTypeUpdate }) => {
  const { id, type, description, amount, totalExpense } = budgetItems;

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
                amount={`+ ${info.amount}`}
              />
            ))}
          </div>
        </div>

        <div className="expenses">
          <h2 className="expenses__title">Expenses</h2>

          <div className="expenses__list">
            {expBudget.map((info) => {
              // calculate individual percentage exp
              const expPecent = Math.round((info.amount / totalExpense) * 100);
              return (
                <AccountItem
                  key={info.id}
                  id={info.id}
                  description={info.description}
                  amount={`- ${info.amount}`}
                >
                  <div className="item__percentage"> {expPecent}% </div>
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
