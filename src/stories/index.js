import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import App from '../App.js';
import DayForecast from '../components/DayForecast.js';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('My App', module)
  .add('my full app', () => <App/>)
  .add('just a single one', () => (
    <DayForecast forecast={{
      dateTimeISO: new Date().toISOString(), 
      maxTempF: 1000, 
      minTempF: 0, 
      maxTempC: 1000,
      minTempC:0,
      icon: "clear.png"
    }} showCelcius={true}/>
  ));

