import { write_json_file } from '../utils/files.js';
import { createCanvas } from 'canvas';
import { fetchDataForAllYears } from './github.contributions';
import { drawContributions } from './github.contributions.canvas';
import fs from 'fs';
import colors from 'colors';

export async function lab_a() {
  try {

    console.log('\n◽◽◽◽ lab_a');

    const fetch_n_draw = async () => {
      await fetch_data_and_store();
      await draw_contributions();

      return 200;
    };

    // return await fetch_n_draw();

    console.log('\n-- lab_a disabled\n\n');

    return 200;

  } catch (e) {
    console.log(e);
    return e;
  }
}


export function draw_contributions(options) {
  try {
    console.log(' draw_contributions '.bgWhite.black);

    const canvas = createCanvas();
    const data = require('./github-contributions-all-data.json').data;
    drawContributions(canvas, {
      data: {
        years: data.years.filter(y => parseInt(y.year) >= 2014),
        contributions: data.contributions
      },
      username: 'jasonhargrove',
      themeName: 'githubDark',
      footerText: 'hey, you got this! have a great day :)'
    });
    fs.writeFileSync('public/github-contributions-jasonhargrove.png', canvas.toBuffer());
    console.log('  ', ' 🦄 draw complete, see public '.bgGreen.black);
    return 200;

  } catch (e) {
    console.log(e)
  }
}

export async function fetch_data_and_store() {
  try {
    console.log(' fetch_data_and_store '.bgWhite.black);

    const data = await fetchDataForAllYears('jasonhargrove');

    write_json_file(__dirname + '/github-contributions-all-data.json', {
      updated: new Date(),
      data
    });

    console.log('  ', ' 🦄 fetch complete, see Lab A '.bgGreen.black);

    return 200;

  } catch (e) {
    console.log(e);
    return e;
  }
}
