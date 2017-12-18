import * as fromReducers from './property.reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { Property } from './../../models/property';

export interface ProductsState {
    properties: fromReducers.AppState;
}

export const reducers: ActionReducerMap<ProductsState> = {
    properties: fromReducers.propertyReducer,
}

export const getProductsState = createFeatureSelector<ProductsState>('products');

// property state
export const getPropertiesState = createSelector(getProductsState, (state: ProductsState) => state.properties);

export const getAllProperties = createSelector(getPropertiesState, fromReducers.getProperties);
export const getAllPropertiesLoaded = createSelector(getPropertiesState, fromReducers.getPropertiesLoaded);
export const getAllPropertiesLoading = createSelector(getPropertiesState, fromReducers.getPropertiesLoading);
