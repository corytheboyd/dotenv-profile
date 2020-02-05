import { store } from '../config';

export default async function(profile: string): Promise<void> {
    store.addNewProfile(profile);
}
