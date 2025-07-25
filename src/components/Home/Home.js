import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div className='container'>
            
      <video autoPlay loop muted playsInline className='background-clip'>
        <source src="/videos/Foret.mp4" type="video/mp4" />
      </video>
      <div className='content'>
        <h1>Магазин Лесник</h1>
        <Link to="/shop" className="btnShop">Перейти в магазин</Link>
      </div>
    </div>
  );
}
