import { write_json_file } from '../utils/files.js';
import { createCanvas } from 'canvas';
import { fetchDataForAllYears } from './github.contributions';
import { drawContributions } from './github.contributions.canvas';
import fs from 'fs';

export function lab_a(options) {
  return new Promise(async (resolve, reject) => {try {
    console.log('\n◽◽◽◽ lab_a');

    const fetch_n_draw = async () => {
      // M.O.M automates this throughtout the day

      await fetch_data_and_store();
      await draw_contributions();

      resolve({
        status: 200
      });
    };

    // return fetch_n_draw();

    console.log('\n-- lab_a disabled\n\n');

    resolve({
      status: 100
    });

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
    footerText: 'hey, you got this! have a great day :)'
  });
  fs.writeFileSync('public/github-contributions-jasonhargrove.png', canvas.toBuffer())

  console.log('\n\n 🦄 draw complete, see public\n');

  return response;

} catch (e) {console.log(e)}}

export function fetch_data_and_store(options) {
  return new Promise(async (resolve, reject) => {try {
    console.log('\n◽◽ fetch_data_and_store');
    let response;

    response = await fetchDataForAllYears('jasonhargrove');

    // Fix anomaly between the data and the GH interface. Timezone issue? 
    // Manual fix for now
    for(let i in response.contributions) {
      const day = response.contributions[i];
      if (day.date === '2021-09-11') {
        // should be 0 not 1
        response.contributions[i] = {
          date: '2021-09-11',
          count: 0,
          color: '#ebedf0',
          intensity: '0'
        };
      }
      if (day.date === '2021-09-10') {
        // should be 23 not 22
        response.contributions[i] = {
          date: '2021-09-10',
          count: 23,
          color: '#60ad4b',
          intensity: '3'
        };
      }
    }

    write_json_file(__dirname + '/github-contributions-all-data.json', {
      updated: new Date(),
      data: response
    });

    console.log('\n\n 🤠 fetch complete\n');

    resolve(response);
  } catch (e) {console.log(e);reject(e)}})
}
