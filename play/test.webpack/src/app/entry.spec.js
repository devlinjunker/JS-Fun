// @flow
import { describe, it } from 'mocha';
import chai from 'chai';
const expect = chai.expect;
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import main from './entry';

describe('App', () => {
  let stub;
  beforeEach(() => {
    stub = sinon.stub(console, 'log');
  });

  it('should log to console', () => {
    main({ test: '123' });
    expect(stub).to.be.called;

    // Need to Restore to see Test Ouput
    stub.restore();
  });

  it('should return 22', () => {
    const result = main({ test: '123' });
    expect(result).to.equal(22);

    // Need to Restore to see Test Ouput
    stub.restore();
  })
});
