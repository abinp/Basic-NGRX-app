import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, effects } from './../store';
import { EffectsModule } from '@ngrx/effects';


import { PropertyComponent } from './property.component';
import { PropertyService } from './property.service';
import { PropertyListComponent } from './property-list/property-list.component';
import { AddPropertyComponent } from './add-property/add-property.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    StoreModule.forFeature('property', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [
    PropertyComponent,
    PropertyListComponent,
    AddPropertyComponent
  ],
  providers: [ PropertyService ],
  exports: [ PropertyComponent ]
})
export class PropertyModule { }
