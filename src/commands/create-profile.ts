import * as Configstore from 'configstore';
import { existsSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { homedir } from 'os';
import * as mkdirp from 'mkdirp';

export default async function(profile: string): Promise<void> {
    const config = new Configstore('dotenv-profile');

    // TODO ensure it exists first
    const current = config.get('profiles');
    if (Array.isArray(current)) {
        if (current.indexOf(profile) === -1) {
            config.set('profiles', [
                ...current,
                profile,
            ]);
        }
    } else {
        config.set('profiles', [profile]);
    }

    const directory = resolve(homedir(), '.config', 'dotenv-profile');

    mkdirp.sync(directory);

    const fileName = `.env.${profile}`;
    const filePath = resolve(directory, fileName);

    if (!existsSync(filePath)) {
        writeFileSync(filePath, null);
    }
}
