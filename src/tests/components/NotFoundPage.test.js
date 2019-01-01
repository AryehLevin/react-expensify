import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage.js';
import '../setupTests.js';

test ('should render Not Found Page correctly ',()=>{
    const wrapper = shallow(<NotFoundPage />);
    expect (wrapper).toMatchSnapshot();
  });