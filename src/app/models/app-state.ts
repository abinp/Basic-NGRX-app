import { Property } from './property';

export interface AppState {
    properties: Property[];
    loading: boolean;
    loaded: boolean;
}
