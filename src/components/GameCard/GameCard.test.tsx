import React from 'react';
import { mount } from 'enzyme';
import { GameCard } from './index';

test('<GameCard />', () => {
  let component = mount(
    <GameCard name={'name1'} />
  );

  expect(component).toMatchSnapshot();

  component = mount(
    <GameCard onPlay={() => {}} name={'name2'} />
  );

  expect(component).toMatchSnapshot();
});

