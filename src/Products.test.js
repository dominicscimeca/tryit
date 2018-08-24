import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';
import { shallow } from 'enzyme';
import {expect} from "chai";

describe('Products', ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Products/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should include a default product list', function () {
        const productsTag = shallow(<Products/>);
        const productList = productsTag.find('.product-list');
        expect(productList).to.have.length(1);
        expect(productList).to.contain(<ul className="product-list"></ul>)
    });
    it('should render product list', function () {
        const products = [
            "Product 1",
            "Product 2"
        ];
        const productsTag = shallow(<Products products={products}/>);
        const productList = productsTag.find('.product-list');
        expect(productList).to.have.length(1);
        expect(productList).to.contain(
            <ul className="product-list">
                <li>Product 1</li>
                <li>Product 2</li>
            </ul>
        )
    });
});
