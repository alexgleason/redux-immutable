/* eslint-disable max-nested-callbacks */

import {
  expect
} from 'chai';
import { Map as ImmutableMap } from 'immutable';
import validateNextState from '../../src/utilities/validateNextState';

describe('utilities', () => {
  describe('validateNextState()', () => {
    context('state is undefined', () => {
      it('throws an error', () => {
        expect(() => {
          // eslint-disable-next-line no-undefined
          validateNextState(undefined, 'reducer name', {
            type: 'foo'
          });
        }).to.throw(Error, 'Reducer "reducer name" returned undefined when handling "foo" action. To ignore an action, you must explicitly return the previous state.');
      });
    });
    context('state is defined', () => {
      it('returns undefined', () => {
        const result = validateNextState(ImmutableMap(), 'reducer name', {
          type: 'foo'
        });

        // eslint-disable-next-line no-undefined
        expect(result).to.equal(undefined);
      });
    });
  });
});
