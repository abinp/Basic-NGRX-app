import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PropertyService } from './property.service';
import { Store} from '@ngrx/store';
import { AppState } from '../models/app-state';
import * as propertyActions from './../actions/property.actions';
import { Property } from '../models/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  propertyList$: Observable<Property[]>;
  // propertyList: any;

  constructor(
    // private propertyService: PropertyService
    private store: Store<AppState>
   ) {
    this.propertyList$ = this.store.select(state => state.properties);
  }

  ngOnInit() {
    this.getProperties();
  }

  getProperties() {
    this.store.dispatch(new propertyActions.LoadPropertiesAction());
    // this.propertyList$ = this.propertyService.loadProperties();//.subscribe(prop => this.propertyList = prop);
  }

}
