import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'path';
import * as Configstore from 'configstore';

export default async function(name: string): Promise<void> {
    const config = new Configstore('dotenv-profile');
    const activeProfile = config.get('activeProfile');

    const path = resolve(__dirname, '../../.env.test');
    const result = dotenvConfig({ path });
    if (result.error) {
        throw result.error;
    }
    console.log(process.env[name]);
}
