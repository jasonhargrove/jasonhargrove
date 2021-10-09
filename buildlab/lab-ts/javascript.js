// Works well

// npx nodemon --exec babel-node buildlab/lab-ts/javascript.js

import { test, test_fn } from './javascript_test_fn.js';

export async function go() {
  try {
    const one = {
      one: 1
    };

    const two = {
      ...one,
      two: 2
    };

    async function x(foo) {
      try {
        const response = { status: 200, message: 'dynamic' };
        console.log('calling TypeScript function from JavaScript');
        test_fn('12345');
        return response;
      } catch (e) {
        console.log(e);
        return e;
      }
    }

    async function y(foo) {
      try {
        const response = await x();
        return response;
      } catch (e) {
        console.log(e);
        return e;
      }
    }

    console.log(test, two, await y('anything goes'));

    return 200;

  } catch (e) {
    console.log(e);

    return e;
  }
}

go()
