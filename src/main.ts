import fs from 'fs';
import path from 'path';
import mimeType from 'mime-types';

function f(filePath: string): Promise<string> {

	return new Promise((resolve) => {

		filePath = path.resolve(__dirname, filePath);

		const fileMimeType = mimeType.lookup(filePath);

		const data = fs.readFileSync(filePath);

		const temp = Buffer.from(data).toString('base64');

		resolve('data:' + fileMimeType + ';base64,' + temp);

	});

}

f('./assets/cat.jpg').then(data => console.log(data));

export default f;
