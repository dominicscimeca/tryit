import React from 'react';
import ReactDOM from 'react-dom';
import AddProduct from './AddProduct';
import { shallow, mount } from 'enzyme';
import {expect} from "chai";

describe('AddProduct', ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddProduct/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should update passed in products on submit', function(){
        const products = [
            "Product 1",
            "Product 2"
        ];
        const addProduct = mount(<AddProduct products={products}/>);
        const input = addProduct.find("input");
        input.instance().value = "Product 3";
        input.simulate('change');

        const submit = addProduct.find("button");

        submit.simulate('click');
        expect(products).to.eql([
            "Product 1",
            "Product 2",
            "Product 3"
        ]);
    });
});
