const faker = require('faker');
const fs = require('fs');

const writeItems = fs.createWriteStream('entries.csv');
writeItems.write('item\n', 'utf8');

function writeTenMillionItems(writer, encoding, callback) {
  let i = 10000000;
  let entry;
  function write() {
    let ok = true;
    do {
      i -= 1;
      if (i >= 8750000) {
        entry = faker.random.word() + ' ' + faker.lorem.word();
      } else if (i >= 7500000) {
        entry = faker.lorem.word() + ' ' + faker.random.word();
      } else if (i >= 6250000) {
        entry = faker.random.word() + ' ' + faker.random.word();
      } else if (i >= 5000000) {
        entry = faker.lorem.word() + ' ' + faker.lorem.word();
      } else if (i >= 3750000) {
        entry = faker.random.words()
      } else if (i >= 2500000) {
        entry = faker.lorem.words()
      } else if (i >= 1250000) {
        entry = faker.lorem.word()
      } else if (i >= 0) {
        entry = faker.random.word();
      }
      let data = `${entry}\n`;
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
