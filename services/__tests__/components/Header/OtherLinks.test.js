import React from 'react';
import OtherLinks from '../../../src/components/Header/headerComponents/OtherLinks';
import { shallow } from 'enzyme';

describe('OtherLinks Component', () => {
  it('renders correctly', () => {
    const props = {
      link: {
        url: '',
        label: '',
      },
    };
    const component = shallow(<OtherLinks {...props} />);
    expect(component).toMatchSnapshot();
  });
});
