import * as Configstore from 'configstore';
import {resolve} from "path";
import {homedir} from "os";
import * as mkdirp from "mkdirp";
import {existsSync} from "fs";

export default async function(profile: string): Promise<void> {
    const config = new Configstore('dotenv-profile');
    const profiles = config.get('profiles');
    if (!Array.isArray(profiles)) {
        process.stdout.write('No profiles exist\n');
        process.exit(0);
    }
    profiles.forEach((profile) => {
        process.stdout.write(`- ${profile}\n`);
    });
}
