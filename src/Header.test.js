import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('Header', ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should include the text tryIt in an h1 tag', function () {
        const header = shallow(<Header />);
        const title = header.find(".title");
        expect(title.contains("Try It.")).toBe(true);
    });
    it('should include martina in by tag', function () {
        const header = shallow(<Header />);
        const by = header.find(".by");
        expect(by.contains("by Martina Juliet Thompson Scimeca")).toBe(true);
    });
});
