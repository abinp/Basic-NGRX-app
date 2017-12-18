import { Injectable } from '@angular/core';
import { PropertyService } from './../../property/property.service';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as propertyActions from './../actions/property.actions';

@Injectable()
export class PropertyEffects {

    constructor(
        private propertyService: PropertyService,
        private actions$: Actions
    ) { }

    @Effect()
    loadProperties$ = this.actions$.ofType(propertyActions.LOAD_PROPERTIES)
        .pipe(
            switchMap(() => {
                return this.propertyService.loadProperties().pipe(
                    map(properties => new propertyActions.LoadPropertiesSuccess(properties)),
                    catchError(error => of(new propertyActions.LoadPropertiesFail(error)))
                );
            }));
}
