import { config } from 'dotenv';
import { resolve } from 'path';

export default function(name: string) {
    const path = resolve(__dirname, '../../.env.test');
    const result = config({ path });
    if (result.error) {
        throw result.error;
    }
    console.log(process.env[name]);
}
