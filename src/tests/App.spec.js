import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/atoms/Button';

describe('<Button/>', () => {

  it('Render button', () => {
    shallow(<Button>dsds</Button>);
  });

})
