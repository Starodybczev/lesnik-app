import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shopLogo from "../Image/shopLogo.png";
import { FcFullTrash } from "react-icons/fc";
import "./ShopItem.css";

export default function ShopItem({ addMass, handleRemove, clearCart, updateQuantity }) {
  // Подсчёт общей суммы
  const totalSum = useMemo(() => {
    return addMass.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  }, [addMass]);

  return (
    <div className="blockTrash">
      {addMass.length === 0 ? (
        <h2 className="emptyCart">Ваша корзина пуста.</h2>
      ) : (
        <>
          {addMass.map((item) => (
            <div key={item.id} className="trash">
              <img className="image" src={item.image} alt={item.name} />
              <div className="trashInfo">
                <h2>{item.brand}</h2>
                <h4 className="h_items">
                  {item.name} {item.models && ` ${item.models}`}
                </h4>
              </div>
              <div className="dictionary">
                <p>{item.description}</p>
              </div>
              <h2>${item.price * (item.quantity || 1)}</h2>
              <div className="quantity-controls">
                <button className='btnMinus' onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)} disabled={(item.quantity || 1) <= 1}>-</button>
                <button className='btnPlus' onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>+</button>
                <span className='summSpan'>{item.quantity || 1}</span>
              </div>
              <button
                className="btnRemove"
                onClick={() => handleRemove(item.id)}
                aria-label={`Удалить ${item.name}`}
              >
                Удалить
              </button>
            </div>
          ))}
          <div className="totalSum">
            <h2>Итого: ${totalSum}</h2>
            <button className="btnBuy">Оформить заказ</button>
            <button className="btnRemove" onClick={clearCart}>Удалить все</button>
          </div>
        </>
      )}
      <li>
        <Link to="/ShopItem">
          <FcFullTrash className="imageShopMob" />
        </Link>
      </li>
    </div>
  );
}

ShopItem.propTypes = {
  addMass: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};
