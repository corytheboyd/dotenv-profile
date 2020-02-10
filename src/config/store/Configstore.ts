import * as Adapter from 'configstore';
import {
    ProfileNotFoundError,
    ProfileAlreadyExistsError,
    Store, Result,
} from './Store';

const STORE_NAME = 'dotenv-profile';
const STORE_KEY = Object.freeze({
    ACTIVE_PROFILE: 'activeProfile',
    PROFILES: 'profiles',
});

export class Configstore implements Store {
    private store: Adapter;

    constructor() {
        this.store = new Adapter(STORE_NAME);
    }

    getActiveProfile(): Result<string> {
        const value = this.get<string | void>(STORE_KEY.ACTIVE_PROFILE);
        if (!value) {
            return {
                error: new ProfileNotFoundError(),
            };
        }
        return {
            value,
        };
    }

    setActiveProfile(profile: string) {
        const profiles = this.getAllProfiles();
        if (profiles.indexOf(profile) === -1) {
            return {
                error: new ProfileNotFoundError(`Profile not found: ${profile}`),
            };
        }
        this.store.set(STORE_KEY.ACTIVE_PROFILE, profile);
        return {};
    }

    getAllProfiles() {
        const value = this.get<string[] | void>(STORE_KEY.PROFILES);
        if (!Array.isArray(value)) {
            return {
                value: [],
            };
        }
        return {
            value,
        };
    }

    addNewProfile(profile: string) {
        const result = this.getAllProfiles();
        if (result.error) {
            return {
                error: result.error,
            };
        }
        if (profiles.indexOf(profile) !== -1) {
            throw new ProfileAlreadyExistsError(`Profile already exists: ${profile}`);
        }
        this.store.set(STORE_KEY.PROFILES, [
            ...profiles,
            profile,
        ]);
    };

    private get<T>(key: string): T {
        return <T>this.store.get(key);
    }
}
