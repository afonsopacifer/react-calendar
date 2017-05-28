import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import Button from '../components/atoms/Button';
import CheckBox from '../components/atoms/CheckBox';
import DayTodo from '../components/molecules/Todo';

// stories
const customStyle = {
  save: {
    backgroundColor: '#98f442'
  },
  edit: {
    backgroundColor: '#fcbc3c'
  },
  delete: {
    backgroundColor: '#fc3c4f'
  }
}

storiesOf('Button', module)
  .add('default', () => {
    return (
      <Button>
        Button
      </Button>
    )
  })
  .add('Inactive', () => {
    return (
      <Button
        isActive={false}>
        Button
      </Button>
    )
  })
  .add('With left icon', () => {
    return (
      <Button
        leftIcon="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2017/png/iconmonstr-rocket-20.png&r=255&g=255&b=255">
        Button
      </Button>
    )
  })
  .add('With right icon', () => {
    return (
      <Button
        rightIcon="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2016/png/iconmonstr-weather-76.png&r=255&g=255&b=255">
        Button
      </Button>
    )
  })
  .add('With custom style', () => {
    return (
      <div>
        <Button
          customStyle={customStyle.save}
          rightIcon="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-save-3.png&r=255&g=255&b=255">
          Save
        </Button>
        <Button
          customStyle={customStyle.edit}
          rightIcon="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-edit-9.png&r=255&g=255&b=255">
          Edit
        </Button>
        <Button
          customStyle={customStyle.delete}
          rightIcon="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-x-mark-1.png&r=255&g=255&b=255">
          Delete
        </Button>
      </div>
    )
  })

storiesOf('CheckBox', module)
  .add('default', () => {
    return (
      <CheckBox id = "myCheckbox">
      </CheckBox>
    )
  })
  .add('With label', () => {
    return (
      <CheckBox
        id = "myCheckbox"
        label = "Label">
      </CheckBox>
    )
  })
  .add('Checked', () => {
    return (
      <CheckBox
        id = "myCheckbox"
        label = "Label"
        isChecked = {true}>
      </CheckBox>
    )
  })

storiesOf('DayTodo', module)
  .add('default', () => {
    return (
      <DayTodo></DayTodo>
    )
  })
