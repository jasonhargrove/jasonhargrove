export const test = 'test';
export default test;

export const test_fn = (foo) => {
  const one = function(bar) {
    console.log('test_fn | one');
  }
  one(foo);
}
