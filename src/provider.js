import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { initialState, toolReducer } from './store/modules/tool/reducer';

export const UserContext = createContext();

function Provider({ children }) {
  const [state, dispatch] = React.useReducer(toolReducer, initialState);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
