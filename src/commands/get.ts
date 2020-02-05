import { config as dotenvConfig } from 'dotenv';
import { getFilePath } from '../config/file';

export default async function(name: string): Promise<void> {
    const path = getFilePath();
    const result = dotenvConfig({ path });
    if (result.error) {
        throw result.error;
    }
    process.stdout.write(process.env[name] || '');
}
