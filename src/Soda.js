import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
    <div>
        <h1 className="title">Select Soda here and choose wisely!</h1>
        <div className="product-container">
            <img className="products"
                src="https://www.themeathousemarket.com/cdn/shop/products/grocery-coca-cola-classic-canned-coke-products-12-oz-can-14052198088757_1024x1024.png?v=1611222385"
                alt="Coca-Cola" 
            />
            <img className="products"
                src="https://www.themeathousemarket.com/cdn/shop/products/grocery-diet-coke-canned-coke-products-12-oz-can-14052231905333_1024x1024.jpg?v=1611222385"
                alt="Diet Coke"
            />
            <img className="products"
                src="https://www.themeathousemarket.com/cdn/shop/products/grocery-sprite-canned-coke-products-12-oz-can-14052236951605_1024x1024.png?v=1611222385"
                alt="Sprite"
            />
            <img className="products"
                src="https://www.themeathousemarket.com/cdn/shop/products/grocery-ginger-ale-canned-coke-products-12-oz-can-14052218404917_1024x1024.png?v=1611222385"
                alt="Ginger Ale"
            />        
        </div>
        <Link className="back-text" to="/">Back</Link>
    </div>
}

export default Soda;