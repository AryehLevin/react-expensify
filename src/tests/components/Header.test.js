//react-test-renderer 
import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/Header.js';
import '../setupTests.js';
//import toJSON from 'enzyme-to-json';

test ('should render Header correctly', ()=>{
    const wrapper = shallow(<Header />);  
    expect(wrapper).toMatchSnapshot();
  //  expect(wrapper.find('h1').text()).toBe("Expensify Application");
});



//import ReactShallowRenderer from 'react-test-renderer/shallow';
// superceded by enzyme for creating snapshots
//const renderer = new ReactShallowRenderer();
//renderer.render(<Header />);
//expect(renderer.getRenderOutput()).toMatchSnapshot();
//console.log(renderer.getRenderOutput());
