import * as Configstore from 'configstore';
import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'path';
import { homedir } from 'os';
import { existsSync } from 'fs';
import * as mkdirp from 'mkdirp';

export default async function(name: string): Promise<void> {
    const config = new Configstore('dotenv-profile');
    const activeProfile = config.get('activeProfile');
    const directory = resolve(homedir(), '.config', 'dotenv-profile');
    mkdirp.sync(directory);
    const fileName = `.env.${activeProfile}`;
    const filePath = resolve(directory, fileName);
    if (!existsSync(filePath)) {
        process.stderr.write(`Profile does not exist: ${activeProfile}\n`);
        process.exit(1);
    }

    const result = dotenvConfig({ path: filePath });
    if (result.error) {
        throw result.error;
    }
    process.stdout.write(process.env[name] || '');
}
