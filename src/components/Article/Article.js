import React, { useState } from 'react';
import "./Article.css";
import { Link } from 'react-router-dom';
import ImageInstagramm from "../Image/ImageInstagramm.png";
import youtube from "../Image/youtube.png";
import github from "../Image/github.png";
import ShopIcon from "../Image/ShopIcon.png";
import BurgerMenuIcon from "../Image/burgerMenu.png";
import pointer from "../Image/pointer.png";
import { FcShop } from "react-icons/fc";


export default function Article() {
  const [burgerActive, setBurgerActive] = useState(false);

  const toggleBurger = () => {
    setBurgerActive((prev) => !prev);
  };

  return (
    <>
      <div className="block">
        <article>
          <nav>
            <ul className='menu'>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/shop">Магазин</Link></li>
              <li><Link to="/about-us">О нас</Link></li>
              <li><Link to="/Account">Профиль</Link></li>
              <li><Link to="/ShopItem"><FcShop className='image'/></Link></li>
            </ul>
          </nav>
          <footer className='footer'>
            <img className='imageLogo' src='https://masterlesgroup.ru/upload/iblock/0fc/0fcfea17e14b792f4ff64598c073a132.png' alt='Logo' />
            <nav>
              <ul className='imageMenu'>
                <li><a href="#" aria-label="Instagram"><img className='imageSource' src={ImageInstagramm} alt='Instagram' /></a></li>
                <li><a href="#" aria-label="YouTube"><img className='imageSource' src={youtube} alt='YouTube' /></a></li>
                <li><a href="#" aria-label="GitHub"><img className='imageSource' src={github} alt='GitHub' /></a></li>
              </ul>
            </nav>
          </footer>
        </article>
      </div>

      {burgerActive && (
        <article className='burgerMenu'>
          <img
            className='pointerAgow'
            src={pointer}
            onClick={() => setBurgerActive(false)}
            alt='Close menu'
            role="button"
            tabIndex="0"
          />
          <nav>
            <ul className='menu'>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/shop">Магазин</Link></li>
              <li><Link to="/AboutUs">О нас</Link></li>
              <li><Link to="/Account">Профиль</Link></li>
            </ul>
          </nav>
          <footer className='footer'>
            <img className='imageLogo' src='https://masterlesgroup.ru/upload/iblock/0fc/0fcfea17e14b792f4ff64598c073a132.png' alt='Logo' />
            <nav>
              <ul className='imageMenu'>
                <li><a href="#" aria-label="Instagram"><img className='imageSource' src={ImageInstagramm} alt='Instagram' /></a></li>
                <li><a href="#" aria-label="YouTube"><img className='imageSource' src={youtube} alt='YouTube' /></a></li>
                <li><a href="#" aria-label="GitHub"><img className='imageSource' src={github} alt='GitHub' /></a></li>
              </ul>
            </nav>
          </footer>
        </article>
      )}

      <img
        className='BurgerMenu'
        src={BurgerMenuIcon}
        onClick={toggleBurger}
        alt='Menu'
        role="button"
        tabIndex="0"
      />
    </>
  );
}
