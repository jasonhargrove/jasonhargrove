
export function lab_b(options) {
  return new Promise(async (resolve, reject) => {try {
    console.log('\n◽◽◽◽ lab_b');

    const do_something = async () => {

      resolve({
        status: 200
      });
    };

    // return do_something();

    console.log('\n-- lab_b disabled\n\n');

    resolve({
      status: 100
    });

  } catch (e) {console.log(e);reject(e)}})
}
