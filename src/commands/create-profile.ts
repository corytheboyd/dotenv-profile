import { existsSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { homedir } from 'os';
import * as mkdirp from 'mkdirp';
import { store } from '../config';

export default async function(profile: string): Promise<void> {
    store.addNewProfile(profile);
    const directory = resolve(homedir(), '.config', 'dotenv-profile');
    mkdirp.sync(directory);
    const fileName = `.env.${profile}`;
    const filePath = resolve(directory, fileName);

    if (!existsSync(filePath)) {
        writeFileSync(filePath, '');
    }
}
