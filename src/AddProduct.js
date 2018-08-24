import React from 'react'

export default ({products = []}) => {
    let inputValue = "";

    const addProduct = () => {
        products.push(inputValue);
    };

    const updateInputValue = (e)=>{
        inputValue = e.target.value;
    };

    return (
      <div>
          <input type="text" onChange={updateInputValue}/>
          <button onClick={addProduct}>Submit</button>
      </div>
    );
};