import { store } from '../config';

export default async function(profile: string): Promise<void> {
    try {
        store.setActiveProfile(profile);
    } catch(error) {

    }
}
