import fs from 'fs';

export function read_dir(path, type) {
  let content = fs.readdirSync(path);

  if (type === 'json') {
    content = content.filter((x) => {
      return x.toLowerCase().indexOf('.json') !== -1;
    });
  }

  return content;
}

export function read_json_file(path) {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

export function write_json_file(path, data) {
  return fs.writeFileSync(path, JSON.stringify(data, null, 2));
}
