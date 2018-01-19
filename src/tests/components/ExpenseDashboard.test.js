import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ExpenseDashboard } from '../../components/ExpenseDashboard';

test('it should render ExpenseDashboard page', () => {
  const wrapper = shallow(<ExpenseDashboard />)
  expect(toJson(wrapper)).toMatchSnapshot();
});
