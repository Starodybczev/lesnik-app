import React, { useState } from 'react';
import "./Shop.css";
import { Link } from 'react-router-dom';
import shopLogo from "../Image/shopLogo.png";
import { FcFullTrash } from "react-icons/fc";

export default function Shop({ mass, addBasketProps }) {


  return (
    <div>
      <section className='imageToolsBackground'>
        <div className='saleBlock'>
          <h2>Специальное предложение</h2>

          <div className="special-offers">
            {mass.slice(0, 2).map((item) => (
              <div key={item.id} className="card">
                <img src={item.image} alt={`${item.brand} ${item.models}`} />
                <h3>{item.brand} {item.models}</h3>
                <p>{item.description}</p>
                <h2><strong>Цена: ${item.price}</strong></h2>
                <button className='btnSale' onClick={() => addBasketProps(item)} >добавить в корзину</button>
              </div>
            ))}
          </div>
        </div>

        <li>
          <Link to="/ShopItem">
            <FcFullTrash className="imageShopMob" />
          </Link>
        </li>
      </section >

      <section className="block_two">
        <div className='saleBlockTwo'>
          <h1 className='h1_Items'>Наши товары</h1>
          <div className="special-offers-Two">
            {mass.slice(2, 10).map((item) => (
              <div key={item.id} className="card cardTwo">
                <img src={item.image} alt={item.brand} />
                <h2>{item.brand} {item.models}</h2>
                <p >{item.description}</p>
                <h2 >${item.price}</h2>
                <button className='btnSale' onClick={() => addBasketProps(item)}>добавить в корзину</button>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}
