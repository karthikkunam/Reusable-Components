import React from 'react';
import { shallow } from 'enzyme';
import ToastContainer from '../../../src/components/ToastContainer';

const props = {
  toastHeader: '',
  hideClose: false,
  autoClose: 5000,
  showToast: true,
  onToastClose: jest.fn(),
};
describe('ToastContainer Component', () => {
  it('renders correctly', () => {
    const component = shallow(<ToastContainer {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('mock setTimeout test', done => {
    const component = shallow(<ToastContainer {...props} />);
    setTimeout(() => {
      console.log('TIME IS UP');
      done();
    }, 5000);
    expect(component).toMatchSnapshot();
  });

  it('renders onClose properly', () => {
    const component = shallow(<ToastContainer {...props} />);
    component
      .find('div')
      .at(1)
      .find('button')
      .simulate('click', {
        onClose: () => {},
      });
    expect(component).toMatchSnapshot();
  });
});
