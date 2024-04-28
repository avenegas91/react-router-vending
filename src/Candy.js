import React from "react";
import { Link } from "react-router-dom";

const Candy = () => {
    <div>
        <h1 className="title">Select Candy here and choose wisely!</h1>
        <div className="product-container">
            <img className="products"
                src="https://www.candywarehouse.com/category-images/Types%20Images/type-lollipops-suckers.jpg"
                alt="Snickers" 
            />
            <img className="products"
                src="https://allcitycandy.com/cdn/shop/products/milkywaycandybar1.84oz_2048x.jpg?v=1596636777"
                alt="Milky Way"
            />
            <img className="products"
                src="https://candyfunhouse.com/cdn/shop/products/Candyfunhouse_hersheys_ReesesTake5_42-Side-jpg-1.jpg?v=1679978804&width=550"
                alt="Take 5"
            />
            <img className="products"
                src="https://pics.walgreens.com/prodimg/578558/900.jpg"
                alt="M&M's"
            />        
        </div>
        <Link className="back-text" to="/">Back</Link>
    </div>
}

export default Candy;