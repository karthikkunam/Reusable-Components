import React from 'react';
import EmployeeName from '../../../src/components/Header/headerComponents/EmployeeName';
import { shallow } from 'enzyme';

describe('EmployeeName Component', () => {
//   it('renders correctly', () => {
//     const component = shallow(<EmployeeName />);
//     expect(component).toMatchSnapshot();
//   });
  it('renders employeeName correctly', () => {
    const props = {
      employeeName: '7BOSS',
    };
    const component = shallow(<EmployeeName {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('when employeeName is undefined ', () => {
    const props = {
      employeeName: undefined,
    };
    const component = shallow(<EmployeeName {...props} />);
    expect(component).toMatchSnapshot();
  });
});
