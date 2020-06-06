/**
 * @format
 */

import 'react-native';
import React from 'react';
import jest from 'jest';
import App from '../App';
// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  jest.mock(<App />);
});
