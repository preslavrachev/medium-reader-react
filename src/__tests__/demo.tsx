import 'react-native';
import React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import { Response } from 'whatwg-fetch';
import Demo from '../__mocks__/demo.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

beforeEach(() => {
  /* ignore the TS compiler error */
  window.fetch = jest.genMockFunction();
});

it('renders correctly', (done) => {
  (window.fetch as jest.Mock<Response>).mockReturnValueOnce(
    Promise.resolve(
      //new Response(JSON.stringify(mockResponse), { status: 200 })
      new Response('foobar', { status: 200 })
    ));

  const tree = renderer.create(
    <Demo />
  );

  setTimeout(() => {
    expect(window.fetch).toHaveBeenCalled();
    expect(JSON.stringify(tree.toJSON())).toContain('foobar');
    done();
  }, 100);
});
