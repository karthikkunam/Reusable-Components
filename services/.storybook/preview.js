import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@7eleven/7boss-style/dist/bundle.css';
import Provider from './provider.js';
import configureStore from './configuedStore.js';
const store = configureStore;
const wrapperStyle = {
  padding: '1rem',
  height: '100vh'
};
addDecorator(storyFn => (
  <div className="margins" style={wrapperStyle}>
    {storyFn()}
  </div>
));
addDecorator(withInfo);
addDecorator(storyFn => <Provider store={store}>{storyFn()}</Provider>);
