export class StoreError extends Error {}
export class ProfileNotFoundError extends StoreError {}
export class ProfileAlreadyExistsError extends StoreError {}

export interface Store {
    getActiveProfile:()=>string

    setActiveProfile:(profile: string)=>void;

    addNewProfile:(profile: string)=>void;

    getAllProfiles:()=>string[];
}
