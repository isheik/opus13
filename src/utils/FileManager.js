import electron from 'electron';
import path from 'path';
import fs from 'fs';

class FileManager {
  static userDataPath = (electron.app || electron.remote.app).getPath('userData');

  static readHome(name) {
    const filePath = path.join(this.userDataPath, name);
    if (!fs.existSync(filePath)) {
      return null;
    }
    return JSON.parse(fs.readFileSync(filePath));
  }

  // static writeHome(name, data) {
// 
  // }
}
