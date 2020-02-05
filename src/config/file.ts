import { resolve } from 'path';
import { homedir } from 'os';
import { config } from 'dotenv';
import {existsSync, writeFileSync} from 'fs';
import * as mkdirp from "mkdirp";
import {store} from "./index";

const DIRECTORY = resolve(homedir(), '.config', 'dotenv-profile');

export function getFilePath(): string {
    const activeProfile = store.getActiveProfile();
    const path = resolve(DIRECTORY, `.env.${activeProfile}`);
    if (!existsSync(path)) {
        mkdirp.sync(DIRECTORY);
        writeFileSync(path, '# Created with dotenv-profile, (but feel free to edit)');
    }
    return path;
}
