import React from 'react';
import { mount } from 'enzyme';
import { SearchInput } from './index';

test('<SearchInput />', () => {
  let component = mount(
    <SearchInput value={''} onChange={() => {}} />
  );

  expect(component).toMatchSnapshot();
});

