// Works well
//// npx nodemon -e 'ts,js' buildlab/lab-ts/typescript_import_javascript.ts
////// Depends on the tsconfig.json in same directory ("module": "commonjs")

// Does not copy imported JS (as it does with the imported TS)
//// npx tsc-watch buildlab/lab-ts/typescript_import_javascript.ts --outDir ./buildlab/lab-ts/gitignore-generated --onSuccess "node ./buildlab/lab-ts/gitignore-generated/typescript_import_javascript.js"
////// `/*.ts`` ignores JS files, `/*` watches JS but checks them against TS rules

import { test, test_fn } from './javascript_test_fn.js';

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
