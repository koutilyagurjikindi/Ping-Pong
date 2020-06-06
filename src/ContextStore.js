import React from 'react';
import PropTypes from 'prop-types';
import {PlayerStore, InitialState} from './Store';

export const Context = React.createContext();

export default function Store(props) {
  const [Playerstate, Playerdispatch] = React.useReducer(
    PlayerStore,
    InitialState,
  );
  return (
    <Context.Provider
      value={{
        Playerstate,
        Playerdispatch,
      }}>
      {props.children}
    </Context.Provider>
  );
}

Store.propTypes = {
  children: PropTypes.any,
  onClickOut: PropTypes.func,
};
