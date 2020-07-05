import React, { useState } from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';

const initialValues = {
  account: 'inc',
  description: '',
  amount: '',
};

const AccountForm = () => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(values);
    setValues(initialValues);
    event.target.reset();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="add">
      <form className="add__container" onSubmit={handleSubmit}>
        <select
          className="add__type"
          name="account"
          value={values.account}
          onChange={handleChange}
        >
          <option value="inc">+</option>
          <option value="exp">-</option>
        </select>

        <Input
          type="text"
          name="description"
          className="add__description"
          placeholder="Add description"
          value={values.description}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="amount"
          className="add__value"
          placeholder="Amount"
          value={values.amount}
          onChange={handleChange}
        />

        <Button
          type="submit"
          className="add__btn"
          disabled={values.description === '' || values.amount === ''}
        >
          <i className="ion-ios-checkmark-outline"></i>
        </Button>
      </form>
    </div>
  );
};

export default AccountForm;
