import { lab_a } from './lab-a/lab_a';
// import { lab_b } from './lab-b/lab_b';
// import { lab_c } from './lab-c/lab_c';

function build_lab(options) {
  const message = `\n◽◽◽◽◽◽◽ build_lab\n\n hello 👋\n`;
  console.log(message);
  lab_a();
  // lab_b();
  // lab_c();
}

build_lab();
