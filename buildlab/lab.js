import { lab_a } from './lab-a/lab_a';

async function build_lab(options) {
  return new Promise(async (resolve, reject) => {try {
    const message = `\n◽◽◽◽◽◽◽ build_lab\n\n hello 👋\n`;
    console.log(message);
    await lab_a();

    resolve({
      status: 200
    });

  } catch (e) {console.log(e);reject(e)}})
}

build_lab();
