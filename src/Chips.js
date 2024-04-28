import React from "react";
import { Link } from "react-router-dom";

const Chips = () => {
    <div>
        <h1 className="title">Select Chips here and choose wisely!</h1>
        <div className="product-container">
            <img className="products"
                src="https://mobileimages.lowes.com/productimages/2dace9cc-7663-476e-95c8-82b200e014eb/15868398.jpg?size=pdhism"
                alt="Doritos Cool Ranch" 
            />
            <img className="products"
                src="https://www.target.com/p/lay-s-classic-potato-chips-8oz/-/A-47085532?ref=tgt_adv_xsp&AFID=google&fndsrc=tgtao&DFA=71700000108139139&CPNG=PLA_Snacks%2BCandy%2BShopping_Local%7CSnacks%2BCandy_Ecomm_Food_Bev&adgroup=SC_Snacks%2BCandy&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9012379&targetid=pla-566872943420&gad_source=1&gclid=CjwKCAjw57exBhAsEiwAaIxaZuh-sGqMi1-DbqhJByxTKlja_Wtz7j00oUnEM53BgCE1BYKV1FofiRoCyPwQAvD_BwE&gclsrc=aw.ds"
                alt="Lays Original"
            />
            <img className="products"
                src="https://mobileimages.lowes.com/productimages/3c73d253-be81-4250-b0f9-e242e79df601/15868280.jpg?size=pdhism"
                alt="Fritos Original"
            />
            <img className="products"
                src="https://target.scene7.com/is/image/Target/GUEST_3857f62c-73dd-452d-9383-c03f41908417?wid=800&hei=800&qlt=80&fmt=webp"
                alt="Funions"
            />        
        </div>
        <Link className="back-text" to="/">Back</Link>
    </div>
}

export default Chips;