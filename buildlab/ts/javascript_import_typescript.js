// Works with quirks
//// npx nodemon -e 'js,ts' --ignore buildlab/ts/gitignore-generated/ --exec 'babel-node buildlab/secretlab-ts/javascript_import_typescript.js && npx tsc buildlab/secretlab-ts/typescript_test_fn.ts --outDir buildlab/secretlab-ts/gitignore-generated'
//// npx nodemon -e 'js,ts' --ignore buildlab/ts/gitignore-generated/ --exec 'babel-node buildlab/secretlab-ts/javascript_import_typescript.js && npx tsc buildlab/secretlab-ts/*.ts --outDir buildlab/secretlab-ts/gitignore-generated'

// Great tool, needs iteration
//// npx tsc-watch buildlab/ts/*.ts  --outDir ./buildlab/ts/gitignore-generated --onSuccess 'babel-node buildlab/ts/javascript_import_typescript.js'
//// `/*.ts`` ignores JS files, `/*` watches JS but checks them against TS rules

require('@babel/register')({ extensions: ['.js', '.ts'] })
const { test, test_fn } = require('./typescript_test_fn.ts');

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
        test_fn(12345);
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
