import React from 'react';
import * as actions from '../../src/actions/index';
import * as types from '../../src/actions/types';

describe('actions', () => {

  it('should create an action to show modal', () => {
    const testComponent = () => (<div>Test</div>);
    const expectedAction = {
      type: types.SHOW_MODAL,
      payload: {
        component: testComponent,
        options: {
          size: 'small'
        }
      }
    };

    expect(actions.showModal(testComponent, {size: 'small'})).toEqual(expectedAction);

  });

  it('should creat an action to hide modal', () => {
    const expectedAction = {
      type: types.HIDE_MODAL
    };

    expect(actions.hideModal()).toEqual(expectedAction);
  })

});