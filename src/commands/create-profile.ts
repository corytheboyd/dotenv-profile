import * as Configstore from 'configstore';

export default function(profile: string): void {
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

    console.log(config.all);
}
