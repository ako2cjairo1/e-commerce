import React from 'react'
import '../Home.css';
import Product from './Product';
import '../testdata.js';

export default function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        key={1}
                        id={1}
                        title="New Apple iPhone 12 (128GB, Blue) [Locked] + Carrier Subscription"
                        price={699}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg" />
                    <Product
                        key={2}
                        id={2}
                        title="Huawei P40 Lite Dual-SIM 128GB + 6GB RAM (GSM Only - International Version"
                        price={439.32}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71bRz5x4p5L._AC_UY218_.jpg" />
                </div>

                <div className="home__row">
                    <Product
                        key={3}
                        id={3}
                        title="Motorola Moto G Pro XT2043-7 Dual SIM 128GB + 4GB RAM (GSM Only | No CDMA) Factory Unlocked 4G/LTE Smartphone (Mystic Indigo) - International Version"
                        price={500}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/811m6hJ2WdL._AC_UY218_.jpg"
                    />
                    <Product
                        key={4}
                        id={4}
                        title="Motorola Moto G Pro XT2043-7 Dual SIM 128GB + 4GB RAM (GSM Only | No CDMA) Factory Unlocked 4G/LTE Smartphone (Mystic Indigo) - International Version"
                        price={500}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/811m6hJ2WdL._AC_UY218_.jpg"
                    />
                    <Product
                        key={5}
                        id={5}
                        title="Motorola Moto G Pro XT2043-7 Dual SIM 128GB + 4GB RAM (GSM Only | No CDMA) Factory Unlocked 4G/LTE Smartphone (Mystic Indigo) - International Version"
                        price={500}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/811m6hJ2WdL._AC_UY218_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        key={6}
                        id={6}
                        title="Motorola Moto G Pro XT2043-7 Dual SIM 128GB + 4GB RAM (GSM Only | No CDMA) Factory Unlocked 4G/LTE Smartphone (Mystic Indigo) - International Version"
                        price={500}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/811m6hJ2WdL._AC_UY218_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}
