
const fs = require('fs');
const path = require('path');

const directoryPath = './'; 
const fileExtensionToDelete = '.txt';    

async function deleteFilesWithExtension(directory, extension) {
  try {
    const files = await fs.promises.readdir(directory);

    const deletionPromises = files.map(async (file) => {
      const filePath = path.join(directory, file)

      if (path.extname(file) === extension) {
        await fs.promises.unlink(filePath)

        console.log(`Файл удален: ${filePath}`)
      }
    });

    await Promise.all(deletionPromises)

    const remainingFiles = await fs.promises.readdir(directory)

    console.log('Оставшиеся файлы:')

    remainingFiles.forEach(remainingFile => {
      console.log(remainingFile)
    });

  } catch (err) {
    console.error('Ошибка при работе с файлами:', err)
  }
}

deleteFilesWithExtension(directoryPath, fileExtensionToDelete)