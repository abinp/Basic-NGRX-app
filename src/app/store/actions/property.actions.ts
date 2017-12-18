import { Action } from '@ngrx/store';

import { Property } from './../../models/property';

export const LOAD_PROPERTIES = 'LOAD_PROPERTIES';
export const LOAD_PROPERTIES_SUCCESS = 'LOAD_PROPERTIES_SUCCESS';
export const LOAD_PROPERTIES_FAIL = 'LOAD_PROPERTIES_FAIL';

export class LoadProperties implements Action {
    readonly type = LOAD_PROPERTIES;
    constructor() { }
}

export class LoadPropertiesSuccess implements Action {
    readonly type = LOAD_PROPERTIES_SUCCESS;
    constructor(public payload: Property[]) { }
}

export class LoadPropertiesFail implements Action {
    readonly type = LOAD_PROPERTIES_FAIL;
    constructor(public payload: any) { }
}

export type Action = LoadProperties | LoadPropertiesSuccess | LoadPropertiesFail;
