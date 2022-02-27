/**
 *   Implementation of singleton design pattern in typescript.
 *
 *   Singleton is a creational design pattern that lets you
 *   ensure that a class has only one instance while providing
 *   a global access point to this instance
 */

class FileService {
    private static _fileService: FileService = null;
    private constructor() {}

    public static getFileService() {
        if (this._fileService === null) {
            this._fileService = new FileService();
        }
        return this._fileService;
    }

    public readFileByUrl(url: string): void {
        console.log('Opening ' + url + "...");
    }
}

const fileService = FileService.getFileService();
fileService.readFileByUrl('MyFile');

const fileService2 = FileService.getFileService();
console.log(fileService === fileService2); // True, because both constants are the same instance.