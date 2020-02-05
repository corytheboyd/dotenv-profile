import { store } from '../config';

export default async function(): Promise<void> {
    const profiles = store.getAllProfiles();
    profiles.forEach((profile) => {
        process.stdout.write(`- ${profile}\n`);
    });
}
