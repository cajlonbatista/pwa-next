import { Context } from 'vm';

import { createStore, AnyAction } from 'redux';
import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper';

export interface APP {}

const INITIAL = {};

const reducer = (state: APP = INITIAL, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return { ...state, ...action.payload };
  }
};
const makeStore: MakeStore<APP> = (context: Context) => createStore(reducer, INITIAL);

export const wrapper = createWrapper<APP>(makeStore, { debug: true });
