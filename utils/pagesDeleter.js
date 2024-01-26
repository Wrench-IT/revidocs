import fs from 'fs';
import path from 'path';

const pagesDeleter = () => {
  const directory = './src/content';

  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err;
        console.log(
          `File ${file} was successfully deleted from ./src/content.`,
        );
      });
    }
  });
};

pagesDeleter();
