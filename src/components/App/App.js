import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Article from '../Article/Article';
import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import AboutUs from '../AboutUs/AboutUs';
import Account from '../Account/Account';
import ShopItem from '../ShopItem/ShopItem';
import ToolsBackground from '../Image/toolsBackground.jpg';
import shurick from '../Image/shurikc.jpg';
import saw from '../Image/saw.jpg';
import bosch from '../Image/Bosch.webp';
import ToolsMetabo from '../Image/TollsId_three.webp';
import Hitachi from '../Image/ToolsId_four.webp';
import BlackDecker from '../Image/ToolsId_five.webp';
import Ryobi from '../Image/ToolsId_six.webp';
import Craftsman from '../Image/ToolsId_seven.webp';
import Einhell from '../Image/ToolsId_eghte.webp';
import Worx from '../Image/ToolsId_nine.webp';
import '../Shop/Shop.css';
import shopOne from "../Image/shopOne.webp"
import shopTwo from "../Image/common.jpg"
import shopThree from "../Image/ShopMarcet.jpg"
import Helper from '../Helper/Helper';

export default function App() {
    const [massCard, setMassCard] = useState([
        { id: 1, image: shurick, brand: 'DeWalt', name: 'screwdriver', models: 'T65', price: 200, description: 'Универсальный инструмент для профессионалов и дома.' },
        { id: 2, image: saw, brand: 'Makita', name: 'screwdriver', models: 'XFD10R', price: 220, description: 'Компактный и мощный шуруповёрт с двумя скоростями.' },
        { id: 3, image: bosch, brand: 'Bosch', name: 'screwdriver', models: 'GSR 12V-30', price: 190, description: 'Лёгкий и удобный шуруповёрт с литий-ионным аккумулятором.' },
        { id: 4, image: ToolsMetabo, brand: 'Metabo', name: 'screwdriver', models: 'PowerMaxx BS', price: 210, description: 'Немецкое качество с системой защиты от перегрузок.' },
        { id: 5, image: Hitachi, brand: 'Hitachi', name: 'screwdriver', models: 'DS18DBFL2', price: 230, description: 'Мощный инструмент с LED-подсветкой и системой плавного пуска.' },
        { id: 6, image: BlackDecker, brand: 'Black+Decker', name: 'screwdriver', models: 'BDCD8C', price: 150, description: 'Лёгкий и надёжный инструмент с хорошей автономностью.' },
        { id: 7, image: Ryobi, brand: 'Ryobi', name: 'screwdriver', models: 'P1811', price: 180, description: 'Беспроводной шуруповёрт с долговечным аккумулятором.' },
        { id: 8, image: Craftsman, brand: 'Craftsman', name: 'screwdriver', models: 'CMCD700C1', price: 195, description: 'Эргономичный шуруповёрт для профессионального использования.' },
        { id: 9, image: Einhell, brand: 'Einhell', name: 'screwdriver', models: 'TE-CD 18/40', price: 175, description: 'Мощный инструмент с высоким крутящим моментом.' },
        { id: 10, image: Worx, brand: 'Worx', name: 'screwdriver', models: 'WX176L', price: 205, description: 'Инновационный шуруповёрт с системой сменных бит.' }
    ]);


    const [massAboutUs , setMassAboutUs] = useState([
        {id:1 , image: shopOne , shop: "LesnikToraigirov" , place: "Toraigirove 30/20" , dictionary: "Магазил Электро товаров премиум качество и мало кому доступное", time: "10:00/12:00"},
        {id:2 , image: shopTwo , shop: "LesnikChockin" , place: "Chockino 10Im" , dictionary: "Магазил Электро товаров низкого качество но доступное каждому", time: "9:00/12:00"},
        {id:3 , image: shopThree , shop: "LesnikLomova" , place: "Lomova 30" , dictionary: "Магазил Электро товаров любого качества", time: "6:00/12:00"}
    ])

    const [addMass, setAddMass] = useState([]);

    // Функция добавления товара в корзину с проверкой на дубликаты
    const addToBasket = (item) => {
        setAddMass((prevItems) => {
            const isExist = prevItems.some((i) => i.id === item.id);
            if (isExist) return prevItems;
            return [...prevItems, item];
        });
    };

    // Функция очистки корзины
    const clearCart = () => {
        setAddMass([]);
    };



    // Функция обновления количества товара в корзине
    const updateQuantity = (id, newQuantity) => {
        setAddMass((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
            )
        );
    };

    // Функция удаления товара из корзины
    const handleRemove = (id) => {
        setAddMass((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <div className='app'>
            <Article />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop mass={massCard} addBasketProps={addToBasket} />} />
                <Route path='/about-us' element={<AboutUs massShop={massAboutUs} /> } />
                <Route path='/account' element={<Account />} />
                <Route path='/ShopItem' element={<ShopItem addMass={addMass} handleRemove={handleRemove}  clearCart={clearCart} updateQuantity={updateQuantity} />} />
                <Route path='/about-us/helper' element={<Helper />} />
            </Routes>
        </div>
    );
}
