import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header'
import chai from 'chai'
const expect = chai.expect;
import { shallow } from 'enzyme';

describe('App', function () {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should include Header', function () {
        const app = shallow(<App />);
        const header = app.find(Header);
        expect(header).to.have.length(1);
    });
});
