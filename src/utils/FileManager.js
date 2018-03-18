import electron from 'electron';
import path from 'path';
import fs from 'fs';

class FileManager {
  static userDataPath = (electron.app || electron.remote.app).getPath('userData');

  static readHome(name) {
    if (!fs.existSync(`${this.userDataPath}${name}`)) {
      return null;
    }
    return JSON.parse(fs.readFileSync(`${this.userDataPath}${name}`));
  }
}
