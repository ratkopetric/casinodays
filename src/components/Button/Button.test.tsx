import React from 'react';
import { mount } from 'enzyme';
import { Button } from './index';

test('<Button />', () => {
  let component = mount(
    <Button loading={false}>{'test'}</Button>
  );

  expect(component).toMatchSnapshot();
});

