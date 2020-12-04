import React from 'react';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://techtalk.vn/wp-content/uploads/2017/11/amazon-la-gi-cach-mua-hang-tren-amazon-1024x458.png"
                    alt=""
                />
                {basket.length === 0 ?(
                    <div>   
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout_title">Your Shopping Basket</h2>

                        {/* list out all of the Checkout Products */}
                        {basket.map((item) => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />

                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;
