import React from 'react';
import Product from "./Product";
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img 
                className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                alt=""
             />

             {/* Product ID, title, price, rating, image */}
            <div className="home_row">
                <Product 
                    id="123135"
                    title="AmazonBasics"
                    price={11.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />

                <Product 
                    id="123135"
                    title="Electronics"
                    price={22.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                />
            </div>

            <div className="home_row">
                <Product 
                    id="123135"
                    title="Wireless products"
                    price={49}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51EXcNKQgoL._AC_SY200_.jpg"
                />

                <Product 
                    id="123135"
                    title="Video Games"
                    price={29.9}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/4101CEZSB2L._AC_SY200_.jpg"
                />

                <Product 
                    id="123135"
                    title="Sellers in Kitchen"
                    price={69.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51PxpmVf51L._AC_SY200_.jpg"
                />
            </div>
            
            <div className="home_row">
                <Product 
                    id="123135"
                    title="Sellers in Baby"
                    price={39.95}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
            </div>
             {/* Product */}
        </div>
    );
}

export default Home;
