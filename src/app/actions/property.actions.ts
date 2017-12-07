import { Property } from './../models/property';

export const LOAD_PROPERTIES = 'LOAD_PROPERTIES';
export const LOAD_PROPERTIES_SUCCESS = 'LOAD_PROPERTIES_SUCCESS';

export class LoadPropertiesAction {
    readonly type = LOAD_PROPERTIES;
    constructor() { }
}

export class LoadPropertiesSuccessAction {
    readonly type = LOAD_PROPERTIES_SUCCESS;
    constructor(public payload: Property[]) { }
}

export type Action
    = LoadPropertiesAction
    | LoadPropertiesSuccessAction;
