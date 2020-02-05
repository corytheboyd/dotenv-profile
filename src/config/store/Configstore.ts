import * as Adapter from 'configstore';
import { Store } from './Store';

const STORE_NAME = 'dotenv-profile';
const STORE_KEY = Object.freeze({
    ACTIVE_PROFILE: 'activeProfile',
    PROFILES: 'profiles',
});

class ProfileNotFoundError extends Error {}

export class Configstore implements Store {
    private store: Adapter;

    constructor() {
        this.store = new Adapter(STORE_NAME);
    }

    getActiveProfile(): string {
        return this.store.get(STORE_KEY.ACTIVE_PROFILE);
    }

    setActiveProfile(profile: string): void {
        const profiles = this.getAllProfiles();
        if (profiles.indexOf(profile) === -1) {
            throw new ProfileNotFoundError();
        }
        this.store.set(STORE_KEY.ACTIVE_PROFILE, profile)
    }

    getAllProfiles(): string[] {
        const value = this.store.get(STORE_KEY.PROFILES);
        if (!Array.isArray(value)) {
            return [];
        }
        return value;
    }

    addNewProfile(profile: string): void {
        this.store.set(STORE_KEY.PROFILES, [
            ...this.getAllProfiles(),
            profile,
        ]);
    };
}
