// auto-runs before build
// // manual: npm run prebuild`

import {
  draw_contributions,
  fetch_data_and_store
} from './lab-a/lab_a.js';

import {
  process_log_for_microblog
} from './lab-l/lab_l.js';

const execSync = require('child_process').execSync;

const make_github_image = async () => {
  await fetch_data_and_store();
  await draw_contributions();
};

const copy_content = () => {
  execSync(`cp README.md ./public`, { stdio:[0, 1, 2] });
};

const prepare_microblog = async () => {
  await process_log_for_microblog();
};

prepare_microblog();
copy_content();
make_github_image();
