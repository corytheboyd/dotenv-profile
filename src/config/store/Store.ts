export interface Store {
    getActiveProfile:()=>string

    setActiveProfile:(profile: string)=>void;

    addNewProfile:(profile: string)=>void;

    getAllProfiles:()=>string[];
}
