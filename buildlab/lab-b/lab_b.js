import colors from 'colors';

export async function lab_b() {
  try {
    console.log(' lab_b '.bgWhite.black);
    console.log(' /buildlab/lab-b/lab_b.js disabled '.bgRed.white);
    return 100;
  } catch (e) {
    console.log(e);
    return e;
  }
}
