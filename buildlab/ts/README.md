TS Lab
=========

> [main e6d9e21] test strategies for ts and js in node

- `javascript.js`
- `javascript_import_typescript.js`
- `typescript.ts`
- `typescript_import_javascript.js`

See top of file for CLI.

--

### Quirks

- JavaScript importing TypeScript is quirky. To be further tested.
- Mistyping a TS filename with Nodemon will cause tsconfig.json to be modified with this message:
 - `The following changes are being made to your tsconfig.json file:
  - compilerOptions.module must be esnext (for import() and import/export)`
 - https://github.com/timarney/react-app-rewired/issues/375#issuecomment-474806096

### Further Interest

- `javascript_import_typescript.js`
 - Re `tsc-watch`. How to get it to watch JS files while only checking TS?
