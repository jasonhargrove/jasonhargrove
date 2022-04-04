// npm run log 'some git commit message' 'some git commit content'

import fs from 'fs';
import colors from 'colors';
import moment from 'moment';

const execSync = require('child_process').execSync;

const line = `---------------------+`;
const args = process.argv;
const message = args[2];
const content = args[3];
const date = moment().format('YYYY-MM-DD HH:m:s');

const log = fs.readFileSync(__dirname + `/log.md`, 'utf8');
fs.writeFileSync(__dirname + `/log-backup.md`, log, null, 'utf8');

const log_new = `\n${line}\n${date}\n${message}\n${content}\n`;
fs.appendFileSync(__dirname + `/log.md`, log_new, 'utf8');

console.log(`  Log Updated  `.bgGreen.black);
console.log(`${log_new.green}\n${line.green}\n`);
execSync(`git status`, { stdio:[0, 1, 2] });
console.log(`\n`);
console.log(`  Committing in 7 seconds  `.bgRed.black);

setTimeout(() => {
	execSync(`git commit -am '${message}'`, { stdio:[0, 1, 2] });
	console.log(`\n`);
	console.log(`  Commmitted  `.bgGreen.black);
	console.log(`\nPush to cloud when ready\n\n`.cyan);
}, 7000);
