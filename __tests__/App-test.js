/**
 * @format
 */

import React from 'react';
import App from '../src/App';

import { render, waitForElement, wait } from '@testing-library/react-native';

it('renders correctly', async () => {
  const { getByTestId } = await render(<App />);
  await wait(() => {
    expect(getByTestId('loading')).toBeFalsy();
  }, {timeout: 20 * 1000});
  const input = await waitForElement(() => getByTestId('list'));
  expect(input).toBeTruthy();
});
