import React from 'react';
import reducer from '../modal';
import * as types from '../../actions/types';

describe('modal reducer: ', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({show: false, component: null});
  });

  it('should handle SHOW_MODAL', () => {

    const testComponent = () => (<div>Test</div>);
    const action = {
      type: types.SHOW_MODAL,
      payload: {
        component: testComponent,
        options: {
          size: 'small'
        }
      }
    };

    const expectedState = {
      show: true,
      component: testComponent,
      options: {size: "small"}
    };

    expect(reducer({}, action)).toEqual(expectedState);
  });

  it('should handle HIDE_MODAL', () => {

    const action = {
      type: types.HIDE_MODAL,
    };

    const expectedState = {
      show: false,
      component: null,
      options: {}
    };

    expect(reducer({}, action)).toEqual(expectedState);
  });

});