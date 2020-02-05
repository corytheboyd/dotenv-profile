import * as Configstore from 'configstore';
import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'path';
import { homedir } from 'os';
import { existsSync } from 'fs';
import * as mkdirp from 'mkdirp';
import { getActiveProfile } from '../store';

export default async function(name: string): Promise<void> {
    const activeProfile = getActiveProfile();
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
