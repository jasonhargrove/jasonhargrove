// auto-runs before build
// // manual: npm run prebuild`

import {
  draw_contributions,
  fetch_data_and_store
} from './lab-a/lab_a.js';

const execSync = require('child_process').execSync;

const make_github_image = async () => {
  await fetch_data_and_store();
  await draw_contributions();
};

const copy_content = () => {
  execSync(`cp README.md ./public`, { stdio:[0, 1, 2] });
};

copy_content();
make_github_image();
