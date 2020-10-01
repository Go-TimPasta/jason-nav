import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.jsx';
import SearchBar from './SearchBar.jsx';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('renders one App component', () => {
    console.log(wrapper.debug());
  });

  it('renders one <SearchBar /> component', () => {
    expect(wrapper.find(SearchBar)).toHaveLength(1);
  });
});
