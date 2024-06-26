const path = require('path');

const filePath = process.argv[2]

if (!filePath) {
  console.error('Не указан путь к файлу')
  process.exit(1)
}


const directoryName = path.dirname(filePath);
const extension = path.extname(filePath);

console.log('Имя директории:', directoryName);
console.log('Расширение файла:', extension);