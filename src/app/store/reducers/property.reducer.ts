import * as propertyActions from './../actions';
import { Property } from '../../models/property';

export interface AppState {
    property_list: Property[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: AppState = {
    property_list: [],
    loading: false,
    loaded: false
};

export function propertyReducer(state = initialState, action: propertyActions.Action) {
    switch (action.type) {
        case propertyActions.LOAD_PROPERTIES: {
            console.log(state);
            return {
                ...state,
                loading: true
            };
        }

        case propertyActions.LOAD_PROPERTIES_SUCCESS: {
            const property_list = action.payload;
            console.log(state, property_list);
            return {
                ...state,
                loading: false,
                loaded: true,
                property_list,
            };
        }

        case propertyActions.LOAD_PROPERTIES_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }

        default: {
            return state;
        }
    }
}

 export const getProperties = (state: AppState) => state.property_list;
 export const getPropertiesLoading = (state: AppState) => state.loading;
 export const getPropertiesLoaded = (state: AppState) => state.loaded;
