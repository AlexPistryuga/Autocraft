import React, { useState } from 'react';
import ReactDOM from 'react-dom';

type Part = {
    id: number;
    title: string;
    price: number;
};

const parts: Part[] = [
    { id: 1, title: 'Auto Part 1', price: 26.99 },
    { id: 2, title: 'Auto Part 2', price: 29.99 },
    { id: 3, title: 'Auto Part 3', price: 24.99 },
];

const App = () => {
    const [cart, setCart] = useState<Part[]>([]);

    const addToCart = (part: Part) => {
        setCart([...cart, part]);
    };

    const totalPrice = cart.reduce((sum, part) => sum + part.price, 0);

    return (
        <div>
            <header className="cart">
                <h2>Cart</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.title} - ${item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
                <p>Total: ${totalPrice.toFixed(2)}</p>
            </header>

            <section>
                <h2>Available Parts</h2>
                <div className="parts-container">
                    {parts.map((part) => (
                        <div key={part.id}>
                            <h3>{part.title}</h3>
                            <p>${part.price.toFixed(2)}</p>
                            <button onClick={() => addToCart(part)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('cart-root'));
