import React from 'react'
import { Link } from 'react-router-dom'
import shopLogo from "../Image/shopLogo.png";
import { FcFullTrash } from "react-icons/fc";
import "./AboutUs.css"


export default function AboutUs({ massShop }) {
  return (
    <div className='BlockShopAu'>
      <h1 className='LogoMain'>Магазин <img className='imageLogoAU' src='https://masterlesgroup.ru/upload/iblock/0fc/0fcfea17e14b792f4ff64598c073a132.png' alt='Logo' /></h1>
      <h2 className='h2'>Наши Магазины</h2>
      <div className='BlockShop' >
        {massShop.map((iem) => (
          <div className='ShopCardAU'>
            <img className='imageShopiD' src={iem.image}></img>
            <h3>{iem.shop}</h3>
            <p>{iem.dictionary}</p>
            <div className='DataPlace'>
              <h3>{iem.place}</h3>
              <h2 className='time'>{iem.time}</h2>
            </div>
          </div>
        ))}
      </div>
      <section className='ShopBlockOne'>
        <h2 className='h2'>Наши услуги</h2>
        <div className='ShopCardAU Card'>
          <img className='imageLogoAU imageTwo' src='https://media.licdn.com/dms/image/v2/C5612AQEFZrxIwPz8bw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1561993602442?e=2147483647&v=beta&t=6i8Qz9gPl7_mPTyH0xNb5kEZSq5Uk_geadGmXPGXwxA'></img>
          <h3>Продажа Немецкого электро инструмента</h3>
          <p>Немецкий инструмент всегда славился своею надежностью и преданастью не смотря на высокую стоймость этот товар отслужит вам как личный рабб .</p>
          <Link to="/shop" className="btnSale">Перейти в магазин</Link>
        </div>
      </section>
      <section className='ShopBlockOne'>
        <h2 className='h2'>Наши цель</h2>
        <div className='blockAncver'>
          <p className='poragraffGoal'>
            Создать надежную платформу для профессионалов и энтузиастов, предлагая широкий ассортимент высококачественных немецких электроинструментов, аксессуаров и расходных материалов. Мы стремимся обеспечить удобный и интуитивно понятный процесс покупки, предлагая клиентам детальные описания товаров, экспертные рекомендации и обзоры, чтобы каждый мог найти идеальное решение для своих задач.
            <br></br>
            Наша миссия — предоставить клиентам не просто инструмент, а уверенность в его качестве, долговечности и эффективности. Мы ориентируемся на профессионалов строительной, ремонтной, производственной и мебельной отрасли, а также на домашних мастеров, которым важны надежность и удобство работы. по вопросам трудоустройства обрашайтесь по кнопке ниже: <Link to="/about-us/helper" className="btnSale">Узнать подробнее</Link>
          </p>
        </div>
        <li>
          <Link to="/ShopItem">
            <FcFullTrash className="imageShopMob" />
          </Link>
        </li>
      </section>
    </div>
  )
}
