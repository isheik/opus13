import electron from 'electron';
import path from 'path';
import fs from 'fs';

class FileManager {
  static userDataPath = (electron.app || electron.remote.app).getPath('userData');

  static readProperty(name) {
    const filePath = path.join(this.userDataPath, name);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    return JSON.parse(fs.readFileSync(filePath));
  }

  static writeProperty(name, data) {
    const filePath = path.join(this.userDataPath, name);
    return fs.writeFileSync(filePath, JSON.stringify(data));
  }
}

export default FileManager;
