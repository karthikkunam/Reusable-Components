import React from 'react';
import { shallow } from 'enzyme';
import CustomModel from '../../../src/components/Modal/Modal.jsx';


describe('Modal Component', () => {
  it('renders correctly with showModal', () => {
    const props = {
      showModal: true,
      modalTitle: '',
      modalBody: '',
      primaryButton:{ buttonLabel: 'Save Changes', className: 'btn-success' },
      secondaryButton:{ buttonLabel: 'Close', className: 'btn-secondary' },
      onModalClose: jest.fn(() => false),
    };
    const component = shallow(<CustomModel {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('renders correctly with hideModal', () => {
    const props = {
      showModal: false,
      modalTitle: '',
      modalBody: '',
      primaryButton:{ buttonLabel: 'Save Changes', className: 'btn-success' },
      secondaryButton:{ buttonLabel: 'Close', className: 'btn-secondary' },
      onModalClose: jest.fn(() => true),
    };
    const component = shallow(<CustomModel {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('Should hide modal on button click', () => {
    const props = {
      showModal: true,
      modalTitle: '',
      modalBody: '',
      primaryButton:{ buttonLabel: 'Save Changes', className: 'btn-success' },
      secondaryButton:{ buttonLabel: 'Close', className: 'btn-secondary' },
      onModalClose: jest.fn(() => false),
    };
    const component = shallow(<CustomModel {...props} />);
    component
      .find('button')
      .at(0)
      .simulate('click', {
        onClose: () => {},
      });
    expect(component).toMatchSnapshot();
  });
  it('Should render Primary and Secondary buttons', () => {
    const props = {
      showModal: true,
      modalTitle: '',
      modalBody: '',
      primaryButton:{ buttonLabel: 'Save Changes', className: 'btn-success' },
      secondaryButton:{ buttonLabel: 'Close', className: 'btn-secondary' },
      onModalClose: jest.fn(() => true),
    };
    const component = shallow(<CustomModel {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('Should render modal with scrollable', () => {
    const props = {
      scrollable: true,
      showModal: true,
      modalTitle: '',
      modalBody: '',
      primaryButton:{ buttonLabel: 'Save Changes', className: 'btn-success' },
      secondaryButton:{ buttonLabel: 'Close', className: 'btn-secondary' },
      onModalClose: jest.fn(() => true),
    };
    const component = shallow(<CustomModel {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('Should render modal with size', () => {
    const props = {
      size: 'xl',
      scrollable: true,
      showModal: true,
      modalTitle: '',
      modalBody: '',
      primaryButton:{ buttonLabel: 'Save Changes', className: 'btn-success' },
      secondaryButton:{ buttonLabel: 'Close', className: 'btn-secondary' },
      onModalClose: jest.fn(() => true),
    };
    const component = shallow(<CustomModel {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('Should render alert correctly', () => {
    const props = {
      alert: true,
      showModal: true,
      modalTitle: '',
      modalBody: '',
      alertButton: { buttonLabel: 'Close', className: 'btn-primary btn-lg btn-block' },
      onModalClose: jest.fn(() => true),
    };
    const component = shallow(<CustomModel {...props} />);
    expect(component).toMatchSnapshot();
  });
});
