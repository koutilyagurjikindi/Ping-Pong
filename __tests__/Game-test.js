import 'react-native';
import React from 'react';
import jest from 'jest';
import Game from '../src/Game';

it('renders correctly', () => {
  jest.mock(<Game />);
});
