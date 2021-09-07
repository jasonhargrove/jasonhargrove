import { lab_a } from './lab-a/lab_a';
import { lab_b } from './lab-b/lab_b';
import { lab_c } from './lab-c/lab_c';

async function build_lab(options) {
  return new Promise(async (resolve, reject) => {try {
    const message = `\n◽◽◽◽◽◽◽ build_lab\n\n hello 👋\n`;
    console.log(message);
    await lab_a();
    await lab_b();
    await lab_c();

    resolve();

  } catch (e) {console.log(e);reject(e)}})
}

build_lab();
