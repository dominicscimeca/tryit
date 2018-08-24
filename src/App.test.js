import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header'
import chai from 'chai'
const expect = chai.expect;
import chaiEnzyme from 'chai-enzyme'
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe('App', function () {
    it('should include Header', function () {
        const app = shallow(<App />);
        const header = app.find(Header);
        expect(header).to.have.length(1);
    });
});
