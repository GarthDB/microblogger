export class Filelist {
  constructor(fileArray, directoryName = false) {
    this.files = fileArray;
    this.directoryName = directoryName;
  }
}

export class File {
  constructor(file) {
    Object.assign(this, file);
    if (this.content && this.encoding === 'base64') this.decoded = atob(this.content);
  }
}

export class PathError {
  constructor(result) {
    Object.assign(this, result);
  }
}
