import React, { useState } from 'react';

import AccountForm from '../AccountForm/AccountForm';
import AccountItem from '../AccountItem/AccountItem';

const Bottom = () => {
  const [state, setState] = useState([]);

  const handleAccountItem = (value) => {
    setState([...state, value]);
    console.log(state);
  };

  return (
    <div className="bottom">
      <AccountForm handleAccountItem={handleAccountItem} />
      <div className="container clearfix">
        <div className="income">
          <h2 className="icome__title">Income</h2>

          <div className="income__list">
            {state &&
              state.map(
                (info) =>
                  info.account === 'inc' && (
                    <AccountItem
                      key={info.description}
                      description={info.description}
                      amount={info.amount}
                    />
                  )
              )}
          </div>
        </div>

        <div className="expenses">
          <h2 className="expenses__title">Expenses</h2>

          <div className="expenses__list">
            {/* <!-- */}
            {state &&
              state.map(
                (info) =>
                  info.account === 'exp' && (
                    <AccountItem
                      key={info.description}
                      description={info.description}
                      amount={info.amount}
                    />
                  )
              )}
            {/* <div className="item clearfix" id="expense-0">
              <div className="item__description">Apartment rent</div>
              <div className="right clearfix">
                <div className="item__value">- 900.00</div>
                <div className="item__percentage">21%</div>
                <div className="item__delete">
                  <button className="item__delete--btn">
                    <i className="ion-ios-close-outline"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="item clearfix" id="expense-1">
              <div className="item__description">Grocery shopping</div>
              <div className="right clearfix">
                <div className="item__value">- 435.28</div>
                <div className="item__percentage">10%</div>
                <div className="item__delete">
                  <button className="item__delete--btn">
                    <i className="ion-ios-close-outline"></i>
                  </button>
                </div>
              </div>
            </div> */}
            {/* --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
