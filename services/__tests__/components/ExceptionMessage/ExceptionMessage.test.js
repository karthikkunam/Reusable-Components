import React from 'react';
import { shallow } from 'enzyme';
import ExceptionMessage from '../../../src/components/ExceptionMessage';

describe('ExceptionMessage Component', () => {
  it('renders correctly', () => {
    const component = shallow(<ExceptionMessage/>);
    expect(component).toMatchSnapshot();
  });
  it('renders default props correctly', () => {
      const props ={
        messageType: 'info', 
        messageHeader: '', 
        messageInfo: ['']
      };
    const component = shallow(<ExceptionMessage {...props}/>);
    expect(component).toMatchSnapshot();
  });
  it('renders success message correctly', () => {
      const props ={
        messageType: 'success', 
        messageHeader: '', 
        messageInfo: ['']
      };
    const component = shallow(<ExceptionMessage {...props}/>);
    expect(component).toMatchSnapshot();
  });
  it('renders error message correctly', () => {
      const props ={
        messageType: 'error', 
        messageHeader: '', 
        messageInfo: ['']
      };
    const component = shallow(<ExceptionMessage {...props}/>);
    expect(component).toMatchSnapshot();
  });
});