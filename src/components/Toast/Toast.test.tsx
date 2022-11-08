import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Toast from './index';
import store from '@/redux/store';

test('<Toast />', () => {
  let component = mount(
    <Provider store={store}>
      <Toast />
    </Provider>
  );

  expect(component).toMatchSnapshot();
});

