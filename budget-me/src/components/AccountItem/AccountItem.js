import React from 'react';

const AccountItem = ({ id, description, amount, children, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(id, amount);
  };

  return (
    <div className="item clearfix">
      <div className="item__description">{description}</div>
      <div className="right clearfix">
        <div className="item__value">{amount}</div>
        {children}
        <div className="item__delete">
          <button className="item__delete--btn" onClick={handleDelete}>
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountItem;
