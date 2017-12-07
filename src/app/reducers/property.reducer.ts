import * as propertyActions from './../actions/property.actions';
// import { AppState } from '../models/app-state';

export function propertyReducer(state = [], action: propertyActions.Action) {
    switch (action.type) {
        case propertyActions.LOAD_PROPERTIES_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

// export const properties = (state: AppState) => {
//     return state.properties;
// };
