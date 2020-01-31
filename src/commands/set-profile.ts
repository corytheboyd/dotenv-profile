import * as Configstore from 'configstore';

export default function(profile: string): void {
    const config = new Configstore('dotenv-profile');

    // TODO ensure it exists first
    config.set('profile', profile);

    console.log(config.all);
}
