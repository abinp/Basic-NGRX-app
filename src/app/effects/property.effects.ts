import { Injectable } from '@angular/core';
import { PropertyService } from './../property/property.service';
import { Effect, Actions } from '@ngrx/effects';
import * as propertyActions from './../actions/property.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class PropertyEffects {

    constructor(
        private propertyService: PropertyService,
        private actions$: Actions
    ) { }

    @Effect() loadProperties = this.actions$
        .ofType(propertyActions.LOAD_PROPERTIES)
        .switchMap(() => this.propertyService.loadProperties()
            .map(properties => (new propertyActions.LoadPropertiesSuccessAction(properties)))
    );

}
