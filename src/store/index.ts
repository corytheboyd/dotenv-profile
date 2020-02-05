import * as Configstore from "configstore";

const STORE_NAME = 'dotenv-profile';
const STORE_KEY = Object.freeze({
    ACTIVE_PROFILE: 'activeProfile',
});

function getStore(): Configstore {
    return new Configstore(STORE_NAME);
}

function getValue(key: string): any {
    const store = getStore();
    return store.get(key);
}

export function getActiveProfile(): string {
    return getValue(STORE_KEY.ACTIVE_PROFILE);
}
