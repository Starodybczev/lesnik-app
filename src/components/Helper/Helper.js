import React, { useState } from 'react'
import "./Helper.css"

export default function Helper() {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");

    const addUser = (event) => {
        event.preventDefault();
        const userData = {
            name: name,
            lastName: lastName,
            mail: mail,
            phone: phone
        };
        console.log("Данные пользователя:", userData);
        event.target.reset();
    };

    return (
        <div className='MainBlockHelpper'>
            <h2 className='HelperH2'>Страница по подачи анкеты на работу</h2>
            <div className='HellperMenu'>
                <h3 className='HelperH2'>Основные Требования</h3>
                <nav>
                    <ul className='menuHelp'>
                        <li> 1.Работа в ночную смену</li>
                        <li> 2.Полное подченение начальству</li>
                        <li> 3.Работа по часавой оплате</li>
                        <li> 4.Именть степень магистра и хотя бы 2 - Высших образования </li>
                        <li> 5.Быть готовым выполнять тяжолую работу</li>
                        <li> 6.Трудолюбие</li>
                    </ul>
                </nav>
            </div>
            <section className='BlockWork'>
                <h2 className='HelperH2'>Что вам предстоит делать</h2>
                <div className='BlockWorkIn'>
                    <div className='blockHellper'>
                        <img></img>
                        <h3>Продажа Электро инструмента</h3>
                        <p>Вам предстоит выходить на тесный и не только контакт и следить за чистотой своего рабочего места ведь чистота залог денег и следить что бы не кто нечего не украл не забывайте вся ответственость глянет на вас и ваших близких </p>
                    </div>
                    <div className='blockHellper'>
                        <img></img>
                        <h3>Быть готовым на грязную работу</h3>
                        <p> Сидеть на стуле ровно вам не кто не обашал поэтому ради вашего здоровья мы подготовили вам ряд упражнений на вашу поясницу и не только </p>
                    </div>
                </div>
            </section>
            <section className='registration'>
                <form className='formReg' onSubmit={addUser}>
                    <h2 className='HelperH2'>Оставить зоявку</h2>
                    <input onChange={(event) => setName(event.target.value)} type='text' placeholder='имя' />
                    <input onChange={(event) => setLastName(event.target.value)} type='text' placeholder='фамилия' />
                    <input onChange={(event) => setMail(event.target.value)} type='text' placeholder='почта' />
                    <input onChange={(event) => setPhone(event.target.value)} type='text' placeholder='телефон' />
                    <button className="btnSale">Оставить зоявку</button>
                </form>
            </section>
        </div>
    )
}
