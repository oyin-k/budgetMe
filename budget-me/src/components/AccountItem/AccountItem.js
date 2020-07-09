import React, { useState } from 'react';

import Modal from '../Modal/Modal';

import { formatNumber } from '../../helpers/formatNumber';

const AccountItem = ({
  id,
  type,
  description,
  amount,
  children,
  deleteItem,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const handleDelete = () => {
    deleteItem(id, amount);
  };

  return (
    <div className="item clearfix">
      <div className="item__description">{description}</div>
      <div className="right clearfix">
        <div className="item__value">{formatNumber(amount, type)}</div>
        {children}
        <div className="item__delete">
          <button className="item__delete--btn" onClick={toggleModal}>
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
        {showModal ? (
          <Modal>
            <h3>Are you sure you want to delete this item?</h3>
            <div className="item__details">
              <p className="item__details--description">{description}</p>
              <p className="item__details--amount">
                {formatNumber(amount, type)}
              </p>
            </div>
            <div className="modal__buttons">
              <button className="modal__buttons--cancel" onClick={toggleModal}>
                Cancel
              </button>
              <button
                className="modal__buttons--confirm"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default AccountItem;
