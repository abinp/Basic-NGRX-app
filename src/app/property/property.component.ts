import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PropertyService } from './property.service';
import { Store} from '@ngrx/store';
import * as fromStore from './../store';
import { Property } from '../models/property';
// import { properties } from '../reducers/property.reducer';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  propertyList$: Observable<Property[]>;
  // propertyList: any;

  constructor(
    private propertyService: PropertyService,
    private store: Store<fromStore.ProductsState>
   ) {
    this.getProperties();
  }

  ngOnInit() {
    // debugger;
    this.propertyList$ = this.store.select(fromStore.getAllProperties);
    // this.store.dispatch(new fromStore.LoadProperties());
    // this.getProperties();
  }

  getProperties() {
    this.store.dispatch(new fromStore.LoadProperties());
    // this.propertyList$ = this.propertyService.loadProperties();//.subscribe(prop => this.propertyList = prop);
  }

}
