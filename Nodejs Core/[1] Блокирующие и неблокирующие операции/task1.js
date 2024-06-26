const fs = require('fs');

function copyFileBlocking(source, destination) {
    let time = new Date()

    try {
        const data = fs.readFileSync(source);
        fs.writeFileSync(destination, data);
        console.log('Файл скопирован успешно.')
        console.log(`Blocking time: ${+(new Date()) - +time}`)
    } catch (err) {
        console.error('Ошибка при копировании файла:', err);
    }
}

function copyFileNonBlocking(source, destination) {
  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(destination);

  let time = new Date()

  readStream.on('error', (err) => {
    console.error('Ошибка при чтении файла:', err);
  });

  writeStream.on('error', (err) => {
    console.error('Ошибка при записи файла:', err);
  });

  writeStream.on('close', () => {
    console.log(`Not Blocking time: ${+(new Date()) - +time}`)
  });

  readStream.pipe(writeStream);
}

copyFileBlocking('file1.txt', 'file2.txt');
copyFileNonBlocking('file1.txt', 'file2.txt');

// При работе время почти одинаковое, только с блокирующими операциями чуть быстрее (булквально на пару секунд)