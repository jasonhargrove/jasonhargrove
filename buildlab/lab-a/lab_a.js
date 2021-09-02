import { write_json_file } from '../utils/files.js';
import { createCanvas } from 'canvas';
import { fetchDataForAllYears } from './github.contributions.js';
import { drawContributions } from 'github-contributions-canvas';
import fs from 'fs';

export function lab_a(options) {
  return new Promise(async (resolve, reject) => {try {
    console.log('\n◽◽◽◽ lab_a');
    let response;

    // await draw_contributions();

    // await fetch_data_and_store();

    resolve(response);

  } catch (e) {console.log(e);reject(e)}})
}

export function draw_contributions(options) {try {
    console.log('\n◽◽ draw_contributions');
  let response;

  const canvas = createCanvas();
  const data = require('./github-contributions-all-data.json').data;
  drawContributions(canvas, {
    data: {
      years: data.years.filter(y => parseInt(y.year) >= 2014),
      contributions: data.contributions
    },
    username: 'jasonhargrove',
    themeName: 'githubDark',
    footerText: 'have a great day :)'
  });
  fs.writeFileSync('public/github-contributions-jasonhargrove.png', canvas.toBuffer())

  console.log('\n\n 🤠 complete, see public\n');

  return response;

} catch (e) {console.log(e)}}

export function fetch_data_and_store(options) {
  return new Promise(async (resolve, reject) => {try {
    console.log('\n◽◽ fetch_all_and_write');
    let response;

    response = await fetchDataForAllYears('jasonhargrove');
    console.log('x', JSON.stringify(response, null, 2));

    const date = new Date();
    write_json_file(__dirname + '/github-contributions-all-data.json', {
      updated: date,
      data: response
    });

    console.log('\n\n 🤠 complete\n');

    resolve(response);
  } catch (e) {console.log(e);reject(e)}})
}
