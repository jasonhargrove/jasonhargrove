// Works great
//// npx tsc-watch buildlab/lab-ts/typescript.ts --outDir ./buildlab/lab-ts/gitignore-generated --onSuccess "node ./buildlab/lab-ts/gitignore-generated/typescript.js"

// Works well
//// npx nodemon -e 'ts,js' buildlab/lab-ts/typescript.ts

import { test, test_fn } from './typescript_test_fn';

export async function go() {
  try {
    let response = { status: 100 };

    const one = {
      one: 1
    };
    const two = {
      ...one,
      two: 2
    };

    test_fn(123);

    const x = async function(foo: number) {
      try {
        return { status: 200, message: `strongly typed ${foo} (number)` };
      } catch (e) {
        console.log(e);
        return e;
      }
    }

    const y = async function(foo: number) {
    // const y = async function(foo: string) {
      try {
        let response = await x(foo);
        return response;
      } catch (e) {
        console.log(e);
        return e;
      }
    };

    console.log(test, two, await y(234));

    return response;

  } catch (e) {
    console.log(e);

    return e;
  }
}

go();
