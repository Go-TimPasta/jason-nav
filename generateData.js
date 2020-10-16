const faker = require('faker');
const fs = require('fs');

const writeItems = fs.createWriteStream('entries.csv');
writeItems.write('item\n', 'utf8');

function writeTenMillionItems(writer, encoding, callback) {
  let i = 10000000;
  function write() {
    let ok = true;
    do {
      i -= 1;
      const item = faker.lorem.word();
      const data = `${item}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionItems(writeItems, 'utf-8', () => {
  writeItems.end();
});
