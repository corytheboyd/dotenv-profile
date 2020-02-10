export class StoreError extends Error {}
export class ProfileNotFoundError extends StoreError {}
export class ProfileAlreadyExistsError extends StoreError {}

export interface Result<T> {
    error?: StoreError;
    value?: T;
}

export interface Store {
    getActiveProfile:()=>Result<string>

    setActiveProfile:(profile: string)=>Result<void>;

    addNewProfile:(profile: string)=>Result<void>;

    getAllProfiles:()=>Result<string[]>;
}
