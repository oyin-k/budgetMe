import React from 'react';

import AccountForm from './components/AccountForm/AccountForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top">
        <div className="budget">
          <div className="budget__title">
            Available Budget in{' '}
            <span className="budget__title--month">%Month%</span>:
          </div>

          <div className="budget__value">+ 2,345.64</div>

          <div className="budget__income clearfix">
            <div className="budget__income--text">Income</div>
            <div className="right">
              <div className="budget__income--value">+ 4,300.00</div>
              <div className="budget__income--percentage">&nbsp;</div>
            </div>
          </div>

          <div className="budget__expenses clearfix">
            <div className="budget__expenses--text">Expenses</div>
            <div className="right clearfix">
              <div className="budget__expenses--value">- 1,954.36</div>
              <div className="budget__expenses--percentage">45%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <AccountForm />
        <div className="container clearfix">
          <div className="income">
            <h2 className="icome__title">Income</h2>

            <div className="income__list">
              {/* <!-- */}
              <div className="item clearfix" id="income-0">
                <div className="item__description">Salary</div>
                <div className="right clearfix">
                  <div className="item__value">+ 2,100.00</div>
                  <div className="item__delete">
                    <button className="item__delete--btn">
                      <i className="ion-ios-close-outline"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="item clearfix" id="income-1">
                <div className="item__description">Sold car</div>
                <div className="right clearfix">
                  <div className="item__value">+ 1,500.00</div>
                  <div className="item__delete">
                    <button className="item__delete--btn">
                      <i className="ion-ios-close-outline"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* --> */}
            </div>
          </div>

          <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>

            <div className="expenses__list">
              {/* <!-- */}
              <div className="item clearfix" id="expense-0">
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
              </div>
              {/* --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
