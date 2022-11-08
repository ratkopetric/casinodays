import React from 'react';
import { mount } from 'enzyme';
import { Input } from './index';

test('<Input />', () => {
  let component = mount(
    <Input errorText={'Error'} />
  );

  expect(component).toMatchSnapshot();

  component = mount(
    <Input type={'password'} />
  );

  expect(component).toMatchSnapshot();
});

