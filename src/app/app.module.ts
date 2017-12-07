import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { propertyReducer } from './reducers/property.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PropertyEffects } from './effects/property.effects';
import { PropertyComponent } from './property/property.component';
import { PropertyService } from './property/property.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({property: propertyReducer}),
    EffectsModule.forRoot([PropertyEffects])
  ],
  providers: [ PropertyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
