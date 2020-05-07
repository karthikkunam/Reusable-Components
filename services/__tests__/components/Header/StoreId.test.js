import React from 'react';
import StoreId from '../../../src/components/Header/headerComponents/StoreId';
import { shallow } from 'enzyme';

describe('StoreId Component', () => {
  it('renders correctly', () => {
    const props = {
      storeID: 35678,
    };
    const component = shallow(<StoreId {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('test without storeID', () => {
    const props = {
      storeID: undefined,
    };
    const component = shallow(<StoreId {...props} />);
    expect(component).toMatchSnapshot();
  });
});
