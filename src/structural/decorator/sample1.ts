/**
 *  Implementation of Decorator design pattern in typescript
 */

interface DataSource {
    writeData(data: any);
    readData(): any;
}

class FileDataSource implements DataSource {

    constructor(_filename: string) {
    }

    writeData(data: any) {

    }

    readData() {
    }
}

class DataSourceDecorator implements DataSource {
    protected wrappee: DataSource;
    constructor(source: DataSource) {
        this.wrappee = source;
    }

    writeData(data: any) {
        this.wrappee.writeData(data);
    }

    readData() {
      return this.wrappee.readData()
    }
}

class EncryptionDecorator extends DataSourceDecorator {

    constructor(props) {
        super(props);

    }

    writeData(data: any) {
        const encoded = this._encode(data);
        this.wrappee.writeData(encoded);
    }

    readData() {
        const data = this.wrappee.readData();
        const decodedData = this._decode(data);
        return decodedData;
    }

    private _encode(data: any): any {
        /**
         *  Encode
         */
        console.log('encoding...')
        return data;
    }


    private _decode(data: any): any {
        /**
         *  Decode
         */
        console.log('decoding...')
        return data;
    }
}

class CompressionDecorator extends DataSourceDecorator {

    constructor(props) {
        super(props);
    }
    writeData(data: any) {
        const encoded = this._compress(data);
        this.wrappee.writeData(encoded);
    }

    readData() {
        const data = this.wrappee.readData();
        const decodedData = this._decompress(data);
        return decodedData;
    }

    private _compress(data: any): any {
        /**
         *  Compress
         */
        console.log('compressing...')
        return data;
    }


    private _decompress(data: any): any {
        /**
         *  Decompress
         */
        console.log('decompressing...')
        return data;
    }
}

class Main {
    run() {
       const newData = {
           name: 'Jovid'
       };
       let source = new FileDataSource('personal-data');
       source.writeData(newData);

       source = new EncryptionDecorator(source);
       source.writeData(newData);

       source = new CompressionDecorator(source);
       source.writeData(newData);

    }
}

new Main().run();