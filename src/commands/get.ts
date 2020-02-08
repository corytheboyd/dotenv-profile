import { config as dotenvConfig } from 'dotenv';
import { getFilePath } from '../config/file';

export default async function(name: string): Promise<void> {
    const path = getFilePath();
    const result = dotenvConfig({ path });
    if (result.error) {
        throw result.error;
    }
    const value: any = process.env[name];
    if (!value) {
        process.stderr.write(`Value not found: ${name}\n`);
        process.exit(1);
    }
    process.stdout.write(process.env[name] as string);
}
