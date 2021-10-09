export async function lab_b() {
  try {
    return 100;
  } catch (e) {
    console.log(e);
    return e;
  }
}
