import * as Configstore from 'configstore';
import {resolve} from "path";
import {homedir} from "os";
import * as mkdirp from "mkdirp";
import {existsSync} from "fs";

export default async function(profile: string): Promise<void> {
    const config = new Configstore('dotenv-profile');
    const directory = resolve(homedir(), '.config', 'dotenv-profile');
    mkdirp.sync(directory);
    const fileName = `.env.${profile}`;
    const filePath = resolve(directory, fileName);
    if (!existsSync(filePath)) {
        process.stderr.write(`Profile does not exist: ${profile}\n`);
        process.exit(1);
    }
    config.set('activeProfile', profile);
}
