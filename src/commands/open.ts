import * as openEditor from 'open-editor';
import { resolve } from 'path';
import { homedir } from 'os';
import { existsSync } from 'fs';
import * as mkdirp from 'mkdirp';
import { store } from '../config';

export default async function(): Promise<void> {
    const activeProfile = store.getActiveProfile();
    const directory = resolve(homedir(), '.config', 'dotenv-profile');
    mkdirp.sync(directory);
    const fileName = `.env.${activeProfile}`;
    const filePath = resolve(directory, fileName);
    if (!existsSync(filePath)) {
        process.stderr.write(`Profile does not exist: ${activeProfile}\n`);
        process.exit(1);
    }

    // TODO respect promise yielding child process
    openEditor([
        {
            file: filePath,
            line: 1,
            column: 1,
        },
    ]);
}
