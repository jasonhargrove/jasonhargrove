import fs from 'fs';
import colors from 'colors';
import { line } from './constants.js';


export async function lab_l() {
  try {
    console.log(' lab_l '.bgWhite.black);

    const process_log = async () => {
      await process_log_for_microblog();
      return 200;
    };

    // return await process_log();

    console.log('/buildlab/lab-l/lab_l.js disabled'.bgRed.white);

    return 200;

  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function process_log_for_microblog() {
  try {
    console.log(' process_log_for_microblog '.bgWhite.black);

    const log = fs.readFileSync(__dirname + `/log.txt`, 'utf8');
    const log_items = log.split(line);
    log_items.shift();

    const items = log_items.map(x => {
      return x.trim().split('\n')
    });

    const microblog_items = items.slice(-10).reverse();

    const path = 'public/microblog.json';
    fs.writeFileSync(path, JSON.stringify({
      updated: new Date(),
      items: microblog_items
    }, null, 2));

    console.log('  ', ' 🦄 microblog complete, see public '.bgGreen.black);

    return 200;

  } catch (e) {
    console.log(e);

    return e;
  }
}
