import React from "react";
import AddProduct from './AddProduct'

export default ({products = []}) => {

    const createProductsElements = (products) => {
        return products.map(createProductElement)
    };

    const createProductElement = (product) => {
        return (<li key={product}>{product}</li>)
    };

    return (
      <div>
          <AddProduct products={products}/>
          <div className="product-list-wrapper">
              <h5>Product List</h5>
              <ul className="product-list">
                  {createProductsElements(products)}
              </ul>
          </div>
      </div>
    );
};