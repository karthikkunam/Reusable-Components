import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from '../../../src/components/Tooltip';

const props = {
    placement: 'top', 
    iconClassName: 'icon icon-info', 
    className: '', 
    trigger: 'hover'
};
describe('ToastContainer Component', () => {
  it('renders correctly', () => {
    const component = shallow(<Tooltip {...props} />);
    expect(component).toMatchSnapshot();
  });
});
