import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, effects } from './store';
import { EffectsModule } from '@ngrx/effects';
import { PropertyEffects } from './store/effects/property.effects';
import { PropertyService } from './property/property.service';
import { PropertyModule } from './property/property.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PropertyModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [ PropertyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
